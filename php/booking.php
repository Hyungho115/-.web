<?php
require 'vendor/autoload.php';

use Google\Cloud\Firestore\FirestoreClient;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Firestore 클라이언트 초기화
    putenv('GOOGLE_APPLICATION_CREDENTIALS=serviceAccountKey.json');
    $firestore = new FirestoreClient([
        'projectId' => 'your-project-id'
    ]);

    // 폼 데이터 가져오기
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $day = $_POST['day'];
    $children = $_POST['total_children'];
    $checkin_date = $_POST['checkin'];
    $checkout_date = $_POST['checkout'];
    $general_use = $_POST['general_use'];
    $message = $_POST['visitor_message'];

    $currentTime = new Timestamp(new \DateTime());

    // Firestore 문서 생성 및 데이터 저장
    $docRef = $firestore->collection('reservations')->add([
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'day' => $day,
        'children' => $children,
        'checkin_date' => $checkin_date,
        'checkout_date' => $checkout_date,
        'general_use' => $general_use,
        'message' => $message,
    ]);

    // 결과 확인
    if ($docRef) {
        echo "Reservation saved successfully!";
    } else {
        echo "Error: could not save the reservation.";
    }
}
?>
