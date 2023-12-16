import { ReactNode } from "react";

// if (process.env.NODE_ENV !== "production") {
//   inject({
//     runtimeInjection: false,
//     styleResolution: "application-order",
//     useRemForFontSize: false,
//     classNamePrefix: "x-",
//     dev: true,
//     test: false,
//   });
// }

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
