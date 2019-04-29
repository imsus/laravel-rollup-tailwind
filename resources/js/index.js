import '../css/index.css';
import App from './App.svelte';

let app = document.getElementById('app');

new App({
    target: app,
    props: {
        initialPage: JSON.parse(app.dataset.page)
    }
});
