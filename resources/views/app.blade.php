<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" href="/css/bundle.css">
    </head>
    <body>
        @inertia
        <script type="module" src="/js/index.js" defer></script>
        <script nomodule src="/nomodule/index.js" defer></script>
    </body>
</html>
