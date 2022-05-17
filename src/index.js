const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    console.log('Clicked');
    System.import('./image_viewer').then(module => {
        console.log('module', module);
        module.default();
    });
}

document.body.appendChild(button);