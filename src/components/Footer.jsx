export default function Footer({ phoneIcon }) {
    return (
      <footer>
        <div className="info-contacto footer-info">
          <a href="mailto:monamourartedulce@gmail.com">
            monamourartedulce@gmail.com
          </a>
          <a
            href="https://wa.me/573001112233"  
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={phoneIcon} alt="WhatsApp" aria-hidden="true" />
            +57 300 111 2233
          </a>
          <a
            href="https://www.google.com/maps/place/C%C3%BAcuta,+Norte+de+Santander/@7.908752,-72.5868224,12z/data=!3m1!4b1!4m6!3m5!1s0x8e66459c645dd28b:0x26736c1ff4db5caa!8m2!3d7.8890971!4d-72.4966896!16zL20vMDJ4dGxr?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cúcuta, Colombia
          </a>
        </div>
      </footer>
    );
  }
  