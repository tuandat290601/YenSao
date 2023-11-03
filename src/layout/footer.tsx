import { FBIcon, InstagramIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-[#D8AA34] w-full py-5">
      <div className="max-w-[1080px] mx-auto w-full">
        <div className="flex my-12 items-center justify-between flex-wrap">
          <div className="flex items-center gap-[30px]">
            <img
              src="https://ucarecdn.com/cba0f7da-0c7b-4649-9d07-8a753f180f80/-/preview/-/quality/smart/-/format/auto/"
              alt="Logo màu đen"
              className="w-[68px] h-[163px]"
            />
            <div>
              <img
                src="https://ucarecdn.com/d3107bc0-6c5a-4e1b-9d2d-2a2331b36e6c/-/preview/-/quality/smart/-/format/auto/"
                alt="Yến nhà vui"
                className="w-[98px] h-9"
              />
              <p className="text-body-lg-normal max-w-[303px] mt-[18px]">
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[90px] flex-wrap">
            <div className="flex flex-col gap-4 text-body-lg-normal">
              <p>Giới thiệu</p>
              <p>Sản phẩm</p>
              <p>Dịch vụ</p>
              <p>Liên hệ</p>
            </div>
            <div className="flex flex-col gap-4 text-body-lg-normal">
              <p>Theo dõi chúng tôi</p>
              <div className="flex items-center gap-2">
                <Icon className="!w-6 !h-[33px]">
                  <FBIcon />
                </Icon>
                <p>Facebook</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-[33px]">
                  <Icon size="lg">
                    <InstagramIcon />
                  </Icon>
                </div>
                <p className="ml-1">Instagram</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[56px] text-body-lg-normal">
          <p>Copyright © 2023</p>
          <div className="flex items-center">
            <p className="mr-8">Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}