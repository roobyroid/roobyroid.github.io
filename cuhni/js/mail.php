<?php
if((isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
$to = 'aleksey01021@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Обратный звонок'; //Загаловок сообщения
$message = '
<html>
<head>
    <title>'.$subject.'</title>
</head>
<body>
<p>Имя: '.$_POST['name'].'</p>
<p>Телефон: '.$_POST['phone'].'</p>
<p>Стиль: '.$_POST['Стиль'].'</p>
<p>Тип: '.$_POST['Тип'].'</p>
<p>Материал: '.$_POST['Материал'].'</p>
<p>Срок: '.$_POST['Срок'].'</p>
<p>Сумма: '.$_POST['Сумма'].'</p>
</body>
</html>'; //Текст нащего сообщения можно использовать HTML теги
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>