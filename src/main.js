import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const app = document.querySelector('#app')

function renderHome() {
  app.innerHTML = `
    <nav>
      <a href="/home" class="logo">MyApp</a>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/contact" id="nav-contact">Contact</a></li>
      </ul>
    </nav>
    <main>
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </main>
  `
  setupCounter(document.querySelector('#counter'))
  setupNavigation()
}

function renderContact() {
  app.innerHTML = `
    <nav>
      <a href="/home" class="logo">MyApp</a>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/contact" id="nav-contact" class="active">Contact</a></li>
      </ul>
    </nav>
    <main class="contact-page">
      <h1>Contact Us</h1>
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </main>
  `
  setupNavigation()
}

function setupNavigation() {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const href = link.getAttribute('href')
      if (href === '/contact') {
        renderContact()
      } else {
        renderHome()
      }
    })
  })
}

renderHome()
