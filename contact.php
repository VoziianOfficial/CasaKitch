<?php

declare(strict_types=1);



header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Only POST requests are allowed.'
    ]);
    exit;
}


$recipientEmail = 'hello@casakitch.com';
$brandName = 'CasaKitch';
$siteDomain = $_SERVER['HTTP_HOST'] ?? 'casakitch.com';


function jsonResponse(bool $success, string $message, int $statusCode = 200): void
{
    http_response_code($statusCode);

    echo json_encode([
        'success' => $success,
        'message' => $message
    ]);

    exit;
}

function cleanText(?string $value, int $maxLength = 1000): string
{
    $value = trim((string) $value);
    $value = preg_replace('/\s+/', ' ', $value) ?? '';
    $value = strip_tags($value);

    if (mb_strlen($value, 'UTF-8') > $maxLength) {
        $value = mb_substr($value, 0, $maxLength, 'UTF-8');
    }

    return $value;
}

function cleanMessage(?string $value, int $maxLength = 4000): string
{
    $value = trim((string) $value);
    $value = strip_tags($value);

    if (mb_strlen($value, 'UTF-8') > $maxLength) {
        $value = mb_substr($value, 0, $maxLength, 'UTF-8');
    }

    return $value;
}

function hasHeaderInjection(string $value): bool
{
    return preg_match('/[\r\n]/', $value) === 1;
}



$honeypot = cleanText($_POST['website'] ?? '', 200);

if ($honeypot !== '') {
    jsonResponse(true, 'Thank you. Your request was received.');
}



$fullName = cleanText($_POST['fullName'] ?? '', 120);
$email = trim((string) ($_POST['email'] ?? ''));
$phone = cleanText($_POST['phone'] ?? '', 80);
$service = cleanText($_POST['service'] ?? '', 160);
$message = cleanMessage($_POST['message'] ?? '', 4000);
$sourcePage = cleanText($_POST['sourcePage'] ?? 'CasaKitch website request form', 220);
$privacyConsent = isset($_POST['privacyConsent']) ? 'Yes' : 'No';



$allowedServices = [
    'Full Kitchen Remodeling',
    'Cabinet Replacement',
    'Countertop Installation',
    'Kitchen Island Design',
    'Backsplash & Tile Work',
    'Lighting & Fixture Updates',
    'Not Sure Yet'
];

if ($fullName === '') {
    jsonResponse(false, 'Please enter your full name.', 422);
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(false, 'Please enter a valid email address.', 422);
}

if (hasHeaderInjection($email)) {
    jsonResponse(false, 'Invalid email address.', 422);
}

if ($phone === '') {
    jsonResponse(false, 'Please enter your phone number.', 422);
}

if ($service === '' || !in_array($service, $allowedServices, true)) {
    jsonResponse(false, 'Please choose a valid service interest.', 422);
}

if ($message === '') {
    jsonResponse(false, 'Please enter your project message.', 422);
}

if ($privacyConsent !== 'Yes') {
    jsonResponse(false, 'Please confirm the provider-matching platform notice.', 422);
}



$subject = 'New CasaKitch Request — ' . $service;

if (hasHeaderInjection($subject) || hasHeaderInjection($fullName)) {
    jsonResponse(false, 'Invalid form data.', 422);
}

$submittedAt = date('Y-m-d H:i:s');

$emailBody = <<<EMAIL
New CasaKitch kitchen remodeling request

Submitted at:
{$submittedAt}

Name:
{$fullName}

Email:
{$email}

Phone:
{$phone}

Service Interest:
{$service}

Project Message:
{$message}

Privacy / Platform Notice Accepted:
{$privacyConsent}

Source Page:
{$sourcePage}

Important platform note:
CasaKitch is an independent kitchen remodeling aggregator and provider-matching platform. CasaKitch does not directly perform remodeling work, install products, sell materials, or act as a contractor.

EMAIL;

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: CasaKitch Website <no-reply@' . $siteDomain . '>',
    'Reply-To: ' . $fullName . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion()
];



$sent = mail(
    $recipientEmail,
    mb_encode_mimeheader($subject, 'UTF-8'),
    $emailBody,
    implode("\r\n", $headers)
);

if (!$sent) {
    jsonResponse(
        false,
        'The request could not be sent right now. Please try again or contact CasaKitch by email.',
        500
    );
}

jsonResponse(
    true,
    'Thank you. Your request was received. CasaKitch will use your details to help guide the next comparison step.'
);
