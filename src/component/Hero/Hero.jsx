import React from 'react';
import styles from './Hero.module.css';
import heroImg from '../../assets/1776528136071.png';

function Hero () {
      return (
    <section className={styles.heroWrapper}>
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-lg-6 text-start">
            <div className={styles.heroContent}>
              <h1 className="fw-bold">
                The <span className={styles.highlight}>#1</span> Job Board for <br />
                Hiring or Find your next <br />
                job in <span className={styles.highlight}>Egypt</span>
              </h1>
              <p className="text-muted mt-4">
                Each month, more than 3 million job seekers turn to website in 
                their search for work, making over 140,000 applications every 
                single day.
              </p>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div className={styles.imageContainer}>
              <img src={heroImg} alt="Job Search Illustration" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;