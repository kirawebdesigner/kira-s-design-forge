<?php
declare(strict_types=1);

const CONTACT_EMAILS = 'contact@kira.pro.et, kirubeldaniel01@gmail.com';
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
$headers = [
    'From: KiraWeb Portfolio <noreply@kiraweb.pro.et>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . PHP_VERSION,
];

if (!mail(CONTACT_EMAILS, $subject, $body, implode("\r\n", $headers))) {
    respond(503, 'The message could not be sent right now. Please email contact@kira.pro.et directly.');
}

respond(200, 'Thanks. Your message was sent to Kirubel.');
