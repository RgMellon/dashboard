<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
  <link rel="stylesheet" href="{{asset('css/app.css')}}">
  <title>Document</title>
</head>
<body>
    @routes
  <div id="app">
  <div class="container flex">
    <div class="menu-lateral">
      <menu-lado></menu-lado>
    </div>
    <div class="conteudo-dashboard">
      <header-dashboard> </header-dashboard>
      @yield('content')
    </div>
  </div>
  <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>