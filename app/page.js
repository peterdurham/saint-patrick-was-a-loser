"use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={`${styles.paganBorder} ${styles.top}`}></div>
      
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.tripleSpiral}></div>
          <h1>THE BITTER TRUTH OF SAINT PATRICK'S DAY</h1>
          <div className={styles.tripleSpiral}></div>
        </div>
      </header>
      
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.introduction}>
            <p className={styles.introText}>The celebration that masks a cultural tragedy</p>
            <div className={styles.divider}>
              <div className={styles.dividerLine}></div>
              <div className={styles.dividerSymbol}></div>
              <div className={styles.dividerLine}></div>
            </div>
          </div>
          
          <div className={styles.manifesto}>
            <p><span className={styles.dropCap}>L</span>isten here, and listen well! What we call "Saint Patrick's Day" is nothing but a <span className={styles.highlight}>GREEN-WASHED MOCKERY</span> of one of the greatest cultural <span className={styles.highlight}>TRAGEDIES</span> in Celtic history!</p>
            
            <p>Let me tell you what <span className={styles.highlight}>REALLY</span> happened on this island! Before the Roman church sent their "blessed" Patrick to our shores, Ireland was a land where people <span className={styles.highlight}>LIVED WITH</span> the land - not just ON it! Our ancestors understood the sacred connections between all living things. They honored the turning of seasons, the ancient knowledge of plants, the wisdom of elders, and the magic flowing through every stream and stone.</p>
            
            <p>Then <span className={styles.highlight}>HE</span> came - this <span className={styles.highlight}>CAPTURED SLAVE</span> turned <span className={styles.highlight}>ZEALOT</span> - returning to destroy what he never bothered to understand!</p>
            
            <p>What does that shamrock <span className={styles.highlight}>REALLY</span> represent? The <span className={styles.highlight}>DESECRATION</span> of our sacred plant symbols! Our ancestors knew the triple spiral represented the three realms of existence, the three aspects of the goddess, the cycles of maiden-mother-crone. Patrick <span className={styles.highlight}>STOLE</span> this symbolism and <span className={styles.highlight}>TWISTED</span> it to serve his foreign god!</p>
            
            <p>And those <span className={styles.highlight}>LEPRECHAUNS</span>? <span className={styles.highlight}>BLOODY HELL!</span> Those were once the Tuatha Dé Danann - the ancient divine race of Ireland, powerful beings of wisdom and magic - reduced to ridiculous little men obsessed with gold! It's spiritual <span className={styles.highlight}>GENOCIDE</span> packaged as cute fairy tales!</p>
            
            <p>Do you know what you're <span className={styles.highlight}>REALLY</span> celebrating when you wear green and get pissed on March 17th? You're <span className={styles.highlight}>TOASTING</span> the destruction of ancient wisdom that took <span className={styles.highlight}>THOUSANDS OF YEARS</span> to develop! Knowledge of herbalism, astronomy, poetry, law, and connection to the land - all <span className={styles.highlight}>BURNED</span> and <span className={styles.highlight}>BURIED</span> under church foundations!</p>
            
            <p>The worst part? We've been <span className={styles.highlight}>TRICKED</span> into celebrating our own cultural <span className={styles.highlight}>LOBOTOMY</span>! Drinking ourselves stupid while wearing plastic green hats made in factories! Meanwhile, our real heritage - the songs, the stories, the connection to land and ancestors - withers away!</p>
            
            <p><span className={styles.highlight}>WAKE UP!</span> When you raise that pint, you're not celebrating Irish culture - you're celebrating its <span className={styles.highlight}>REPLACEMENT</span> with a watered-down, church-approved, commercialized <span className={styles.highlight}>PARODY</span>!</p>
            
            <p>Our ancestors' ways weren't perfect, but they were <span className={styles.highlight}>OURS</span> - born from <span className={styles.highlight}>THIS</span> soil, under <span className={styles.highlight}>THESE</span> stars. They knew how to live in harmony with the world without destroying it. They understood that the sacred was <span className={styles.highlight}>HERE</span> - not in some distant heaven!</p>
            
            <p>So before you "celebrate" Saint Patrick again, ask yourself: Who <span className={styles.highlight}>REALLY</span> benefits from keeping us drunk, distracted, and disconnected from our <span className={styles.highlight}>TRUE</span> heritage? And what wisdom might still be waiting, buried beneath centuries of Christian concrete, if only we had the courage to <span className={styles.highlight}>DIG IT UP</span>?</p>
          </div>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <div className={`${styles.oakLeaf} ${styles.left}`}></div>
        <p>Reclaim Your Celtic Heritage</p>
        <div className={`${styles.oakLeaf} ${styles.right}`}></div>
      </footer>
      
      <div className={`${styles.paganBorder} ${styles.bottom}`}></div>
    </div>
  );
}