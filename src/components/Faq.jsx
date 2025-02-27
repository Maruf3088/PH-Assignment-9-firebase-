import React from "react";

const Faq = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 data-aos="fade-up" data-aos-delay="50" className="text-center font-bold text-3xl mt-5">
        {" "}
        Frequently Asked Questions (FAQs)
      </h1>
      <p data-aos="fade-up" data-aos-delay="100" className="text-center font-semibold font-xs text-gray-500 my-5">
        Find answers to the most common questions about our platform, services,
        and features.
      </p>
      <div className="flex flex-col md:flex-row gap-10 my-10">
        <div data-aos="fade-left" data-aos-delay="200" className="md:w-1/2 flex justify-center items-center">
          <img
            src="/images/sales.png"
            alt=""
            className="rounded-lg w-[75%]"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="200" className="md:w-1/2 mx-auto">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How do I use a coupon code?
            </div>
            <div className="collapse-content">
              <p>
                To use a coupon code, copy the code and apply it at checkout on
                the respective brand's website.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mt-2">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              Are these coupons valid for all users?
            </div>
            <div className="collapse-content">
              <p>
                Some coupons are for new users only, while others are available
                for everyone. Check the coupon details for eligibility.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mt-2">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              Do these discounts apply automatically?
            </div>
            <div className="collapse-content">
              <p>
                No, you need to manually enter the coupon code at checkout to
                avail the discount.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mt-2">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              What should I do if a coupon code doesn't work?
            </div>
            <div className="collapse-content">
              <p>
                Ensure that the coupon code is entered correctly and hasn't
                expired. If the issue persists, check the terms and conditions
                or contact customer support.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mt-2">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              What should I do if a coupon code doesn't work?
            </div>
            <div className="collapse-content">
              <p>
                Ensure that the coupon code is entered correctly and hasn't
                expired. If the issue persists, check the terms and conditions
                or contact customer support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
