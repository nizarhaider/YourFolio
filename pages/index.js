import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";
import Pricing from "@layouts/Pricing";
import { useRef } from "react";
import Faq from "@layouts/Faq";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';



import { Swiper as SwiperCore, Navigation } from 'swiper/core';

SwiperCore.use([Autoplay, Pagination]);

const Home = ({ frontmatter }) => {
  const { banner, feature, services, pricing, universities, faq, testimonials } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      {/* Banner */}
      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold">{banner.title}</h1>
              <p className="mt-4">{markdownify(banner.content)}</p>
              {
                <Link
                  className="btn btn-primary mt-4"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              }
              <Image
                className="mx-auto mt-12"
                src={banner.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/*Universities */}
      <section className="section bg-theme-light">
        <div className="container">
          <h4 className="text-center">Accepted Universities</h4>
          <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
            {universities.map((university) => (
              <div
                className="flex items-center justify-center"
                key={university.name}
              >
                <Image
                  src={university.image}
                  alt={university.name}
                  width={140}
                  height={30}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(feature.title)}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-theme-light p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section ${"bg-theme-light"}`}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={
                      service.images.length > 1 ? { clickable: true } : false
                    }
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    init={service?.images > 1 ? false : true}
                  >
                    {/* Slides */}
                    {service?.images.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <Image src={slide} alt="" width={600} height={500} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 md:mt-0 ${
                    !isOdd && "md:order-1"
                  }`}
                >
                  <h2 className="font-bold leading-[40px]">{service?.title}</h2>
                  <p className="mb-2 mt-4">{service?.content}</p>
                  {service.button.enable && (
                    <Link
                      href={service?.button.link}
                      className="cta-link inline-flex items-center text-primary"
                    >
                      {service?.button.label}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Pricing */}
      <Pricing data={pricing} />

      {/* Testimonial */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="text-center">
            <h2 className="text-4xl font-bold">What Students Say</h2>
          </div>
          <div className="mt-10">
            <Swiper
              modules={[Autoplay, Pagination]}
              // autoplay={{ delay: 2000 }}
              key={testimonials.length}
              loop={true}
              className="swiper-container"
              slidesPerView={"auto"} // display three cards
              centeredSlides={true} // center the slide on the screen
              spaceBetween={30} // add some space between the cards
              breakpoints={{
                // when screen width is greater than or equal to 640px (medium and large screens)
                640: {
                  slidesPerView: 2, // show two slides at a time
                },
                // when screen width is greater than or equal to 1024px (large screens)
                1024: {
                  slidesPerView: 3, // show three slides at a time
                },
              }}
              // breakpoints={
              //   {
              //     // when window width is >= 320px
              //     320: {
              //       slidesPerView: 1,
              //       spaceBetween: 30,
              //     },
              //     // when window width is >= 480px
              //     480: {
              //       slidesPerView: 2,
              //       spaceBetween: 30,
              //     },
              //     // when window width is >= 640px
              //     640: {
              //       slidesPerView: 3,
              //       spaceBetween: 30,
              //     },
              //     // when window width is >= 768px
              //     1024: {
              //       slidesPerView: 4,
              //       spaceBetween: 30,
              //     },
              //   }
              // }
            >
              <div className="swiper-wrapper bg-white align-bottom">
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div
                      className="testimonial-card flex h-full flex-col justify-between  rounded-md bg-white p-8 shadow-md"
                      style={{ height: "250px" }}
                    >
                      <div className="testimonial-content text-md mb-4 text-gray-700">
                        {testimonial.content}
                      </div>
                      <div className="testimonial-author flex items-center">
                        <Image
                          className="testimonial-avatar mr-4 rounded-full"
                          src={testimonial.avatar}
                          width={50}
                          height={50}
                          alt=""
                        />
                        <div className="testimonial-details">
                          <div className="testimonial-name text-lg font-medium">
                            {testimonial.name}
                          </div>
                          <div className="testimonial-position text-sm text-gray-500">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="font-bold ">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-20">
            <Faq data={faq} />
          </div>
        </div>
      </section>
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
