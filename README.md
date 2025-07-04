# Chúc Mừng Năm Mới 2024

Dự án web hiển thị thiệp chúc mừng năm mới 2024 với hiệu ứng chuyển đổi và hoạt ảnh đẹp mắt.

## Tổng Quan

Đây là một ứng dụng web được xây dựng bằng Next.js, React và Tailwind CSS. Ứng dụng hiển thị hiệu ứng chuyển đổi từ năm 2023 sang năm 2024 kèm theo thiệp chúc mừng năm mới với hiệu ứng ruy băng (ribbon) đẹp mắt.

## Cấu Trúc Dự Án

```
chuc_mung_nam_moi/
├── public/              # Tài nguyên tĩnh
├── src/                 # Mã nguồn
│   ├── app/             # App router của Next.js
│   │   ├── components/  # Các component được sử dụng trong app
│   │   │   ├── Process.js  # Component hiển thị tiến trình
│   │   │   └── Year.js     # Component hiển thị năm
│   │   ├── home/        # Trang chủ với thiệp chúc mừng năm mới
│   │   │   ├── index.css   # CSS cho trang chủ
│   │   │   └── page.js     # Component trang chủ
│   │   ├── globals.css  # CSS toàn cục
│   │   ├── layout.js    # Layout toàn cục
│   │   └── page.js      # Trang chuyển đổi từ 2023 sang 2024
├── tailwind.config.js   # Cấu hình Tailwind CSS
├── next.config.mjs      # Cấu hình Next.js
└── package.json         # Quản lý phụ thuộc và scripts
```

## Tính Năng

- **Hiệu ứng chuyển đổi**: Hiển thị chuyển đổi từ năm 2023 sang năm 2024
- **Thiệp chúc mừng năm mới**: Thiết kế với hiệu ứng ruy băng đẹp mắt
- **Hoạt ảnh**: Sử dụng CSS animations để tạo hiệu ứng chuyển động

## Công Nghệ Sử Dụng

- [Next.js](https://nextjs.org/) - Framework React
- [React](https://reactjs.org/) - Thư viện UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS

## Cài Đặt và Chạy

1. Clone repository:

```bash
git clone https://github.com/your-username/chuc_mung_nam_moi.git
cd chuc_mung_nam_moi
```

2. Cài đặt các phụ thuộc:

```bash
npm install
# hoặc
yarn install
```

3. Chạy phiên bản phát triển:

```bash
npm run dev
# hoặc
yarn dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem kết quả.

## Xây Dựng và Triển Khai

Để xây dựng phiên bản production:

```bash
npm run build
# hoặc
yarn build
```

Để chạy phiên bản production:

```bash
npm run start
# hoặc
yarn start
```

## Giấy Phép

[MIT](https://choosealicense.com/licenses/mit/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.