export const Instagram = () => {
  return (
    <section className="instagram">
      <div className="container">
        <div className="instagram__wrap">
          <div className="instagram__col instagram__col-left">
            <div className="instagram__col-title">
              <img src="/images/Instagram-title.png" />
              <p>Мы в экстазе, когда ты нас отмечаешь) Отмечай плз чаще</p>
            </div>
            <div className="instagram__col-image">
              <img src="/images/instagram-1.jpg" />
              <img
                className="instagram__col-image-2"
                src="/images/instagram-2.jpg"
              />
            </div>
          </div>
          <div className="instagram__col instagram__col-center">
            <img src="/images/instagram-3.jpg" />
          </div>
          <div className="instagram__col instagram__col-right">
            <div className="instagram__col-title">
              <p className="instagram__col-title-hashtag">#boorivagirls</p>
              <p>Ставь тэг чтобы быть в нашей тусовке.</p>
            </div>
            <div className="instagram__col-image">
              <img
                className="instagram__col-image-4"
                src="/images/instagram-4.jpg"
              />
              <img src="/images/instagram-5.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
