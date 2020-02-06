<html lang="en">
<head>
    <meta charset="utf-8">

    <title>Digital Clock</title>
    <meta name="Sam Kautz" content="Digital Clock">

    <link rel="stylesheet" href="styles.css">

</head>

<body>

     <header class="clock-header"> DIGITAL CLOCK </header>

    <div class="clock">
        <div>
            <h1 id="time"></h1>
            <h3>Toggle Time</h3>
            <label class="switch" id="military-toggler">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>
        </div>

        <div class="mdy">
            <h1 id="weekday"></h1>
            <h1 id="month"></h1>
            <h1 id="date"></h1>
            <h1 id="year"></h1>
        </div>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
