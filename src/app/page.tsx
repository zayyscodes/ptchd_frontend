import Image from "next/image";
import ProductCard from "@/components/productCard";
import TestimonialCard from "@/components/reviewCard";

export default function Home() {
  const oneLiners = [
    "✨BE IN WITH A CHANCE TO WIN $100 GIFT CARD ALL WEEK ✨",
    "✨ HAPPY NEURODIVERSITY CELEBRATION WEEK ✨",
    "✨FREE SHIPPING ON ORDERS OVER $75AUD✨",
  ];

  const featuresLeft = [
    { icon: "/assets/vegan.png", text: "Vegan Friendly" },
    { icon: "/assets/glutenFree.png", text: "Gluten, Latex & Paraben Free" },
  ];

  const featuresRight = [
    {
      icon: "/assets/plantPowered.png",
      text: "Plant Powered, All Natural Ingredient",
    },
    { icon: "/assets/flag.png", text: "Aussie Owned & Operated" },
  ];

  return (
    <div className="page">
      <div className="breakingNewsBanner">
        <div className="bannerContent">
          {oneLiners.map((text, index) => (
            <span key={index} className="bannerText">
              {text}
            </span>
          ))}
          {oneLiners.map((text, index) => (
            <span key={`repeat-${index}`} className="bannerText">
              {text}
            </span>
          ))}
        </div>
      </div>

      <section className="heroSection">
        <nav className="navbar">
          <div className="navContent">
            <div className="navContentLeft">
              <div className="navLeft">
                <button className="navButton">Home</button>
                <button className="navButton shopAllLink">
                  Shop All
                  <Image
                    src="/assets/dropdown.png"
                    alt="Dropdown"
                    width={12}
                    height={6}
                  />
                </button>
                <button className="navButton">Bundles</button>
              </div>

              <div className="navLogo">
                <Image
                  src="/assets/logo.png"
                  alt="PTCHD+ Logo"
                  width={150}
                  height={40}
                />
              </div>

              <div className="navRight">
                <button className="navButton">Science</button>
                <button className="navButton">About Us</button>
                <button className="navButton">Contact Us</button>
              </div>
            </div>

            <div className="navIcons">
              <Image
                src="/assets/search.png"
                alt="Search"
                width={20}
                height={20}
              />
              <Image
                src="/assets/profile.svg"
                alt="Account"
                width={20}
                height={20}
              />
              <Image src="/assets/bag.png" alt="Cart" width={20} height={20} />
            </div>
          </div>
        </nav>

        <div className="heroContent">
          <h1 className="heroTitle">Wellness without the overwhelm.</h1>
          <button className="launchButton">
            <Image src="/assets/cart.png" alt="Cart" width={18} height={18} />
            Shop now
          </button>
        </div>

        <div className="featuresContainer">
          <div className="featureColumn">
            {featuresLeft.map((feature, index) => (
              <div key={index} className={`featureItem feature${index}`}>
                <Image
                  src={feature.icon}
                  alt={feature.text}
                  width={60}
                  height={60}
                />
                <p>{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="featureColumn">
            {featuresRight.map((feature, index) => (
              <div
                key={index + 2}
                className={`featureItem feature${index + 2}`}
              >
                <Image
                  src={feature.icon}
                  alt={feature.text}
                  width={60}
                  height={60}
                />
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="productsSection">
        <div className="waveTop">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path
              d="M0,120 C240,-20 480,240 720,100 C960,-20 1200,240 1440,100 L1440,200 L0,200 Z"
              fill="#D4A5E0"
            />
          </svg>
        </div>


        <div className="decorativeFruitTL">
          <Image
            src="/assets/strawberry.png"
            alt="Strawberry"
            width={400}
            height={400}
          />
        </div>

        <div className="decorativeFruitBR">
          <Image src="/assets/kiwi.png" alt="Kiwi" width={400} height={400} />
        </div>

        <h2
          className="heroTitle"
          style={{
            fontSize: "36px",
            marginBottom: "1px",
          }}
        >
          Wellness made to fit real life!
          <p className="sectionSubtitle">
            You don't need a perfect routine to take care of yourself. Just
            calm, consistent support that fits into your day, not the other way
            around.
          </p>
        </h2>

        <div className="productGrid">
          <ProductCard
            title="Triple pack"
            price="135"
            image="/assets/triplePack.png"
          />
          <ProductCard
            title="Multivitamins"
            price="45"
            image="/assets/multivitpatch.png"
          />
          <ProductCard
            title="Energy patch"
            price="45"
            image="/assets/energyPatch.png"
          />
          <ProductCard
            title="Focus patch"
            price="45"
            image="/assets/focusPatch.png"
          />
        </div>
        <button className="launchButton">
          <Image src="/assets/cart.png" alt="Cart" width={18} height={18} />
          Shop ALL
        </button>
      </section>

      <section className="testimonialSection">
        <div className="waveTopTestimonial">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path
              d="M0,120 C240,-20 480,240 720,100 C960,-20 1200,240 1440,100 L1440,200 L0,200 Z"
              fill="#E8B4D0"
            />
          </svg>
        </div>

        <div className="decorativeFruitTL">
          <Image
            src="/assets/orange.png"
            alt="Orange"
            width={400}
            height={400}
          />
        </div>

        <div className="decorativeFruitBR">
          <Image
            src="/assets/avocado.png"
            alt="Avocado"
            width={200}
            height={200}
          />
        </div>

        <h2 className="heroTitle" style={{
          fontSize: "40px",
          color: "#ffffffff"
        }}>Hundreds of Aussies are patching daily!</h2>
        <div className="testimonialGrid">
          <TestimonialCard
            name="kristen D."
            image="/assets/kristenD_review.jpg"
          />

          <TestimonialCard name="brandon" image="/assets/brandonReview.png" />
          <TestimonialCard name="Holly" image="/assets/holly_review.png" />
          <TestimonialCard name="simona c" image="/assets/simona_review.jpg" />
        </div>
      </section>

      <section className="supportSection">
        <div className="waveBottomTestimonial">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path
              d="M0,100 C240,180 480,20 720,100 C960,180 1200,20 1440,100 L1440,0 L0,0 Z"
              fill="#E8B4D0"
            />
          </svg>
        </div>

        <div className="supportContent">
          <h2 className="supportTitle">Support Without<br />the Struggle</h2>
          <p className="supportBody">
            No routines to remember.<br />
            No pressure to get it right. No guilt for forgetting.<br />
            Because you've got enough going<br />
            on already. SensaPatch provides calm,<br />
            steady support that does its thing<br />
            while you do yours.
          </p>
          <button className="supportButton">about us</button>
        </div>
      </section>

      <section className="whyChooseSection">
        <div className="waveBottomSupport">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path
              d="M0,120 C240,-20 480,240 720,100 C960,-20 1200,240 1440,100 L1440,200 L0,200 Z"
              fill="#F0A8CC"
            />
          </svg>
        </div>

        <div className="decorativeFruitTL">
          <Image
            src="/assets/strawberry.png"
            alt="Strawberry"
            width={200}
            height={200}
          />
        </div>


        <div className="decorativeFruitBR">
          <Image src="/assets/kiwi.png" alt="Kiwi" width={200} height={200} style={{
            zIndex: 0
          }} />
        </div>

        <h2 className="whyPtchdHeading">why ptchd+</h2>
        <p className="whyPtchdSubheading">
          ptchd+ is a wellness patch brand designed for busy brains and real life. We create simple, wearable support using carefully selected ingredients, without the overwhelm of traditional supplements.
        </p>

        <div className="whyChooseContainer">
          <div className="featureColumn">
            {featuresLeft.map((feature, index) => (
              <div key={index} className={`featureItem feature${index}`}>
                <Image
                  src={feature.icon}
                  alt={feature.text}
                  width={60}
                  height={60}
                />
                <p>{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="threePackCenter">
            <Image
              src="/assets/three_packs.png"
              alt="Three Pack"
              width={600}
              height={500}
            />
          </div>

          <div className="featureColumn">
            {featuresRight.map((feature, index) => (
              <div key={index + 2} className={`featureItem feature${index + 2}`}>
                <Image
                  src={feature.icon}
                  alt={feature.text}
                  width={60}
                  height={60}
                />
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletterSection">
        <div className="waveBottomNewsletter">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path
              d="M0,120 C240,-20 480,240 720,100 C960,-20 1200,240 1440,100 L1440,200 L0,200 Z"
              fill="#F5DAEA"
            />
          </svg>
        </div>

        <div className="newsletterContent">
          <p className="whyPtchdOneLiner">Wellness without the Overwhelm.</p>
          <h2 className="newsletterHeading">Join and get 10% off your first order</h2>
          <div className="emailInputContainer">
            <input
              type="email"
              placeholder="Enter your email"
              className="emailInput"
            />
            <button className="submitButton">Submit</button>
          </div>
        </div>
      </section>

      <section className="footerSection">
        <div className="waveBottomFooter">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path
              d="M0,120 C240,-20 480,240 720,100 C960,-20 1200,240 1440,100 L1440,200 L0,200 Z"
              fill="#C5B4ED"
            />
          </svg>
        </div>

        <div className="footerDecorativeSymbol">
          <Image
            src="/symbol.png"
            alt="Decorative symbol"
            width={180}
            height={180}
          />
        </div>

        <div className="footerContent">
          <div className="footerLogoSection">
            <Image
              src="/assets/logo.png"
              alt="ptchd+ logo"
              width={200}
              height={160}
            />
          </div>

          <div className="footerColumn">
            <h3 className="footerColumnTitle">Quick Links</h3>
            <ul className="footerLinkList">
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop All</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="footerColumn">
            <h3 className="footerColumnTitle">Policies</h3>
            <ul className="footerLinkList">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#shipping">Shipping, Return & Refund</a></li>
            </ul>
          </div>

          <div className="footerColumn">
            <h3 className="footerColumnTitle">Need Help?</h3>
            <ul className="footerLinkList">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#help">Help</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
