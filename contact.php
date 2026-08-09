<?php
declare(strict_types=1);

const CONTACT_EMAILS = ['contact@kira.pro.et', 'kirubeldaniel01@gmail.com'];
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

function respond(int $status, string $message): never
{
    http_response_code($status);
    if (str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json')) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(['ok' => $status < 400, 'message' => $message], JSON_UNESCAPED_SLASHES);
        exit;
    }

    header('Content-Type: text/html; charset=UTF-8');
    $safeMessage = htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    echo '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Contact - Kirubel Daniel</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;background:#faf7f3;color:#111;font:18px/1.6 Arial,sans-serif}main{max-width:620px}h1{font-size:clamp(44px,9vw,86px);line-height:.95;letter-spacing:-.06em}a{color:inherit;font-weight:700}</style></head><body><main><h1>' . $safeMessage . '</h1><p><a href="/#contact">Return to the portfolio</a></p></main></body></html>';
    exit;
}

function smtpRead($socket, array $expectedCodes): string
{
    $response = '';
    do {
        $line = fgets($socket, 1024);
        if ($line === false) {
            throw new RuntimeException('SMTP connection closed unexpectedly.');
        }
        $response .= $line;
    } while (isset($line[3]) && $line[3] === '-');

    $code = (int) substr($line, 0, 3);
    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException('SMTP server rejected the request.');
    }
    return $response;
}

function smtpCommand($socket, string $command, array $expectedCodes): string
{
    if (fwrite($socket, $command . "\r\n") === false) {
        throw new RuntimeException('Unable to write to the SMTP connection.');
    }
    return smtpRead($socket, $expectedCodes);
}

function sendAuthenticatedEmail(string $subject, string $body, string $replyTo): void
{
    $configPath = __DIR__ . '/contact-config.php';
    if (!is_file($configPath)) {
        throw new RuntimeException('SMTP configuration is unavailable.');
    }

    $config = require $configPath;
    $username = trim((string) ($config['username'] ?? ''));
    $password = str_replace(' ', '', (string) ($config['app_password'] ?? ''));
    if (!filter_var($username, FILTER_VALIDATE_EMAIL) || $password === '') {
        throw new RuntimeException('SMTP configuration is invalid.');
    }

    $errorNumber = 0;
    $errorMessage = '';
    $socket = fsockopen('smtp.gmail.com', 587, $errorNumber, $errorMessage, 15);
    if ($socket === false) {
        throw new RuntimeException('Unable to connect to Gmail SMTP.');
    }
    stream_set_timeout($socket, 20);

    try {
        smtpRead($socket, [220]);
        smtpCommand($socket, 'EHLO kiraweb.pro.et', [250]);
        smtpCommand($socket, 'STARTTLS', [220]);
        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            throw new RuntimeException('Unable to secure the SMTP connection.');
        }
        smtpCommand($socket, 'EHLO kiraweb.pro.et', [250]);
        smtpCommand($socket, 'AUTH LOGIN', [334]);
        smtpCommand($socket, base64_encode($username), [334]);
        smtpCommand($socket, base64_encode($password), [235]);
        smtpCommand($socket, 'MAIL FROM:<' . $username . '>', [250]);
        foreach (CONTACT_EMAILS as $recipient) {
            smtpCommand($socket, 'RCPT TO:<' . $recipient . '>', [250, 251]);
        }
        smtpCommand($socket, 'DATA', [354]);

        $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
        $headers = [
            'From: KiraWeb Portfolio <' . $username . '>',
            'To: ' . implode(', ', CONTACT_EMAILS),
            'Reply-To: ' . $replyTo,
            'Subject: ' . $encodedSubject,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit',
            'Date: ' . gmdate('D, d M Y H:i:s') . ' +0000',
        ];
        $safeBody = preg_replace('/^\./m', '..', str_replace(["\r\n", "\r"], "\n", $body));
        $payload = implode("\r\n", $headers) . "\r\n\r\n" . str_replace("\n", "\r\n", $safeBody) . "\r\n.";
        smtpCommand($socket, $payload, [250]);
        smtpCommand($socket, 'QUIT', [221]);
    } finally {
        fclose($socket);
    }
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, 'Please use the portfolio contact form.');
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$website = trim((string) ($_POST['website'] ?? ''));

if ($website !== '') {
    respond(200, 'Thanks. Your message has been received.');
}

if ($name === '' || strlen($name) > MAX_NAME_LENGTH || preg_match('/[\r\n]/', $name)) {
    respond(422, 'Please enter a valid name.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > MAX_EMAIL_LENGTH || preg_match('/[\r\n]/', $email)) {
    respond(422, 'Please enter a valid email address.');
}
if ($message === '' || strlen($message) > MAX_MESSAGE_LENGTH) {
    respond(422, 'Please enter a message under 5,000 characters.');
}

$subject = 'Portfolio inquiry from ' . $name;
$body = "Name: {$name}\nEmail: {$email}\n\nProject details:\n{$message}";
try {
    sendAuthenticatedEmail($subject, $body, $email);
} catch (Throwable $error) {
    error_log('Portfolio contact SMTP failure: ' . $error->getMessage());
    respond(503, 'The message could not be sent right now. Please email contact@kira.pro.et directly.');
}

respond(200, 'Thanks. Your message was sent to Kirubel.');
