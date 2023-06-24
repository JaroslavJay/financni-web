import "../pages/PagesCSS/Services.css";
import myServices from "../images/P5127887.JPG";

const Services = () => {
  return (
    <div>
      <div className="container">
        <div className="top-page">
          <div className="top-left">
            <h1>
              Služby? Tato stránka bude fungovat jak stránka pro finančního
              poradce, proto je tato část takto rozvržena.
            </h1>
          </div>
          <div className="top-right">
            <img alt="" src={myServices} />
          </div>
        </div>
        <div className="upper-text">
          <h1>V jakých oblastech vám pomohu?</h1>
        </div>
        <div className="middle-page">
          <div className="middle-left">
            <div className="house-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-house-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
              </svg>
            </div>
            <div className="house-h2">
              <h2>Financování hypotéky uvěry</h2>
            </div>
            <div className="house-text"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              beatae aspernatur necessitatibus maxime animi consequatur, sunt
              reprehenderit aperiam eum impedit perferendis repellendus fugit!
              Aspernatur expedita omnis facilis delectus quod obcaecati harum,
              provident, ea nostrum quisquam facere, corporis beatae tempora
              numquam sint dolorem excepturi non porro. Inventore dolores
              quibusdam sint voluptate?
            </p>
          </div>
          <div className="middle-center">
            <div className="heart-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </div>
            <div className="heart-h2">
              <h2>Financování hypotéky uvěry</h2>
            </div>
            <div className="heart-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                beatae aspernatur necessitatibus maxime animi consequatur, sunt
                reprehenderit aperiam eum impedit perferendis repellendus fugit!
                Aspernatur expedita omnis facilis delectus quod obcaecati harum,
                provident, ea nostrum quisquam facere, corporis beatae tempora
                numquam sint dolorem excepturi non porro. Inventore dolores
                quibusdam sint voluptate?
              </p>
            </div>
          </div>
          <div className="middle-right">
            <div className="finance-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-graph-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                />
              </svg>
            </div>
            <div className="finance-h2">
              <h2>Financování hypotéky uvěry</h2>
            </div>
            <div className="finance-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                beatae aspernatur necessitatibus maxime animi consequatur, sunt
                reprehenderit aperiam eum impedit perferendis repellendus fugit!
                Aspernatur expedita omnis facilis delectus quod obcaecati harum,
                provident, ea nostrum quisquam facere, corporis beatae tempora
                numquam sint dolorem excepturi non porro. Inventore dolores
                quibusdam sint voluptate?
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-text">
          <h2>Jak bude vypadat naše spolupráce?</h2>
        </div>
        <div className="bottom-page">
          <div className="bottom-right">
            <div className="bottom-right-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-phone-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
              </svg>
            </div>
            <div className="bottom-right-text">
              <p>Po zavolání nebo emailu si domluvíme schůzku</p>
            </div>
          </div>
          <div className="bottom-arrow-first">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          </div>
          <div className="bottom-center">
            <div className="bottom-center-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-pie-chart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z" />
              </svg>
            </div>
            <div className="bottom-center-text">
              <p>Vypracuji pro vás smlouvu s nejlepšími možnými podmínkami</p>
            </div>
          </div>
          <div className="bottom-arrow-second">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          </div>

          <div className="bottom-left">
            <div className="bottom-left-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-pen-fill"
                viewBox="0 0 16 16"
              >
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
              </svg>
            </div>
            <div className="bottom-left-text">
              <p>Vypracuji pro vás smlouvu s nejlepšími možnými podmínkami</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
