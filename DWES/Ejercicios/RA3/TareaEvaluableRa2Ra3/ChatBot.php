<?php
// Historial de mensajes y chistes guardados
$historial = "";
$chistesGuardados = [];

// Función para generar la respuesta del chatbot
function generarRespuesta($mensajeUsuario) {
    global $chistesGuardados; // Accede a la variable global de chistes
    $mensajeUsuario = strtolower(trim($mensajeUsuario));

    // Respuestas predefinidas del chatbot
    $respuestas = [
        "hola" => "¡Hola! ¿Cómo puedo ayudarte hoy?",
        "¿quién eres?" => "Soy un chatbot simulado para este proyecto de entorno servidor.",
        "¿qué puedes hacer?" => "Puedo responder preguntas básicas. ¡Pregúntame algo!",
        "gracias" => "¡De nada! Estoy aquí para ayudarte.",
        "adiós" => "¡Adiós! Que tengas un buen día.",
        "cuéntame un chiste" => [
            "¿Por qué los pájaros no usan Facebook? ¡Porque ya tienen Twitter!",
            "¿Qué le dice una iguana a su hermana gemela? ¡Iguanita!",
            "¿Por qué los esqueletos no pelean entre ellos? ¡Porque no tienen agallas!",
            "¿Cómo se despiden los químicos? ¡Ácido un placer!",
            "¿Qué le dice una computadora a otra? ¿Quieres bailar un byte?"
        ]
    ];

    // Buscar coincidencia y devolver la respuesta
    foreach ($respuestas as $pregunta => $respuesta) {
        if (strpos($mensajeUsuario, $pregunta) !== false) {
            // Si es un chiste, guardar la lista en una variable global
            if (is_array($respuesta)) {
                $chistesGuardados = $respuesta; // Guardar chistes para poder pedir "otro"
                return $respuesta[array_rand($respuesta)];
            }
            return $respuesta;
        }
    }

    // Respuesta por defecto
    return "Lo siento, no entiendo tu pregunta. Intenta decir 'hola' o 'adiós'.";
}

// Procesamos el formulario si hay un mensaje enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['mensaje'])) {
    $mensajeUsuario = htmlspecialchars($_POST['mensaje']);
    
    // Recuperar el historial anterior si existe
    $historial = isset($_POST['historial']) ? $_POST['historial'] : "";

    // Añadir el mensaje del usuario al historial
    $historial .= "<p class='user'>Usuario: " . $mensajeUsuario . "</p>";

    // Si el usuario pidió "otro", devolver otro chiste
    if ($mensajeUsuario === "otro" && !empty($_POST['chistes_guardados'])) {
        $chistesGuardados = json_decode($_POST['chistes_guardados'], true);
        $respuestaBot = $chistesGuardados[array_rand($chistesGuardados)];
    } else {
        // Generar la respuesta del chatbot
        $respuestaBot = generarRespuesta($mensajeUsuario);
    }

    // Añadir la respuesta del chatbot al historial
    $historial .= "<p class='bot'>Bot: " . $respuestaBot . "</p>";
}

// Para asegurar que los chistes se mantengan en el formulario
$chistesGuardadosJson = json_encode($chistesGuardados);

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot Simulado</title>
    <style>
        body {
            font-family: Verdana, sans-serif;
            background-color: #003366; 
            margin: 0;
            padding: 0;
        }
        .chat-container {
            width: 400px;
            margin: 50px auto;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        .chat-header {
            font-size: 18px;
            font-weight: bold;
            color: #003366; 
            margin-bottom: 10px;
        }
        .chat-box {
            width: 100%;
            height: 300px;
            border: 1px solid #ccc;
            border-radius: 5px;
            overflow-y: auto;
            padding: 10px;
            background-color: #f9f9f9;
        }
        .chat-box p {
            margin: 10px 0;
        }
        .chat-box p.user {
            color: #003366; 
            text-align: right;
        }
        .chat-box p.bot {
            color: #333;
            text-align: left;
        }
        .chat-input {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
        }
        button {
            background-color: #003366; 
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            width: 100%;
        }
        button:hover {
            background-color: #002244;
        }
    </style>
</head>
<body>

<div class="chat-container">
    <div class="chat-header">Chatbot Simulado</div>
    <div class="chat-box">
        <!-- Mostramos el historial de mensajes -->
        <?php echo $historial; ?>
    </div>

    <!-- Formulario para enviar mensajes -->
    <form method="post" action="chatbot.php">
        <textarea class="chat-input" name="mensaje" placeholder="Escribe tu mensaje..."></textarea>
        <!-- Campo oculto para el historial -->
        <input type="hidden" name="historial" value="<?php echo htmlspecialchars($historial); ?>">
        <!-- Campo oculto para los chistes -->
        <input type="hidden" name="chistes_guardados" value="<?php echo htmlspecialchars($chistesGuardadosJson); ?>">
        <button type="submit">Enviar</button>
    </form>
</div>

</body>
</html>
