import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {

  useEffect(() => {
    const canvas = document.getElementById('moleculeCanvas');
    const ctx = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    let molecules = [];
    for (let i = 0; i < 20; i++) { // fewer molecules
      molecules.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }
  
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      molecules.forEach(m => {
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 102, 204, 0.4)';
        ctx.fill();
        m.x += m.dx;
        m.y += m.dy;
        if (m.x < 0 || m.x > canvas.width) m.dx *= -1;
        if (m.y < 0 || m.y > canvas.height) m.dy *= -1;
      });
      requestAnimationFrame(animate);
    }
  
    animate();
  
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <div className="home-page">
      <div className="molecule-background">
        <canvas id="moleculeCanvas"></canvas>
      </div>

      <header className="hero-section">
        <h1>LUCID PHARMATECH</h1>
        <p>Innovating healthcare with precision, quality, and trust.</p>
        <Link to="/products" className="cta-button">View Our Products</Link>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At Lucid Pharmatech, we are dedicated to delivering high-quality medicines
          that improve lives. With a commitment to research, innovation, and safety,
          we serve healthcare professionals and patients with excellence.
        </p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Lucid Pharmatech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
