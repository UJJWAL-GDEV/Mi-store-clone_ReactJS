import React from 'react'
import '../Stylesheets/Footer.css'
import '../Stylesheets/PreFooter.css'


const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="22" width="22" ><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>

const youtubeIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="22" width="22" ><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>

const instagramIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="22" width="22" ><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>

const twitterIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="22" width="22"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>

const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M220 578q0 20 2.5 39t7.5 36q3 12-1.5 24T213 694q-11 5-22.5 0T175 678q-8-25-11.5-49.5T160 578q0-131 94.5-225.5T480 258h43l-61-61q-8-8-8-19t8-19q8-8 19.5-8t19.5 8l109 108q9 9 9 21t-9 21L502 417q-8 8-20 8t-20-8q-8-8-8-20t8-20l59-59h-41q-107 0-183.5 76.5T220 578Zm520-1q0-20-2.5-39t-7.5-37q-4-12 .5-24t15.5-17q11-5 22 0t15 16q9 25 13 50t4 51q0 131-94.5 225.5T480 897h-45l61 61q8 8 8 19t-8 19q-8 8-19.5 8t-19.5-8L348 888q-9-9-9-21t9-21l109-109q8-8 19.5-8t19.5 8q8 8 8 19.5t-8 19.5l-61 61h45q107 0 183.5-76.5T740 577Z"/></svg>

const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m612 936-263-93-179 71q-17 9-33.5-1T120 883V325q0-13 7.5-23t19.5-15l202-71 263 92 178-71q17-8 33.5 1.5T840 268v565q0 11-7.5 19T814 864l-202 72Zm-34-75V356l-196-66v505l196 66Zm60 0 142-47V302l-142 54v505Zm-458-12 142-54V290l-142 47v512Zm458-493v505-505Zm-316-66v505-505Z"/></svg>

const shieldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m436 709 228-228-42-41-183 183-101-101-44 44 142 143Zm44 266q-140-35-230-162.5T160 533V295l320-120 320 120v238q0 152-90 279.5T480 975Zm0-62q115-38 187.5-143.5T740 533V337l-260-98-260 98v196q0 131 72.5 236.5T480 913Zm0-337Z"/></svg>

const angleBracketRight = <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 96 960 960" width="16"><path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z"/></svg>

const Footer = ({footer}) => {
  return (
    <>
    <div className="preFooter1">
      <div>
        {repeatIcon}
        <p> <b>Hassle-free replacement</b> <br /> 10-day easy replacement policy on mi.com </p>
      </div>
      <div>
        {shieldIcon}
        <p> <b>100% secure payments</b> <br /> We support Cards, Wallets, EMI and COD </p>
      </div>
      <div>
        {mapIcon}
        <p> <b>Vast service network</b> <br /> 1000 Mi service-centers across 600+ cities </p>
      </div>
    </div>
    <div className="preFooter2">
      <div>
        <p>LET'S STAY IN TOUCH</p>
        <span>Get updates on sales, specials and more</span>
        </div>

      <div>
      <div>
        <input type="email" name="email" placeholder="Enter Email Address" />
        <button>{angleBracketRight}</button>
      </div>
      <span>Thanks. You're on our email list for special offers.</span>
      </div>

      <div>
        <p>FOLLOW MI</p>
        <span>We want to hear from you!</span>
      </div>

      <div>{facebookIcon} {youtubeIcon} {instagramIcon} {twitterIcon}</div>

    </div>

    <div className="footer">
      <div>
        <p>SUPPORT</p>
        {
          footer.support.map((item, index) => (
            <a key={item.name} href={item.url}>{item.name}</a>
          ))
        }
      </div>

      <div>
        <p>SHOP & LEARN</p>
        {
          footer.shopAndLearn.map((item, index) => (
            <a key={item.name} href={item.url}>{item.name}</a>
          ))
        }
      </div>

      <div>
        <p>RETAIL STORES</p>
        {
          footer.retailStore.map((item, index) => (
            <a key={item.name} href={item.url}>{item.name}</a>
          ))
        }
      </div>

      <div>
        <p>ABOUT US</p>
        {
          footer.aboutUS.map((item, index) => (
            <a key={item.name} href={item.url}>{item.name}</a>
          ))
        }
      </div>

      <div>
        <p>CONTACT US</p>
        {
          footer.contactUs.map((item, index) => (
            <a key={item.name} href={item.url}>{item.name}</a>
          ))
        }
      </div>

      <div>
        <p>Chat with our Virtual AI Bot (24/7 
          Live Agent Support)</p>
        <button>CHAT NOW</button>
      </div>

    </div>
      <div className="footerBorder" >
      <p>Copyright ©️ 2010 - 2021 Xiaomi. All Rights Reserved </p>
      </div>
    </>
  )
}

export default Footer
