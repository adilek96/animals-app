import createMiddleware from "next-intl/middleware";


export default createMiddleware({
  locales: ["en", "ru", "az"],
  defaultLocale: "ru",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
}
// import {withAuth} from 'next-auth/middleware';
// import createIntlMiddleware from 'next-intl/middleware';
// import {NextRequest} from 'next/server';
 
// const locales = ['ru', 'en', 'az'];
// const publicPages = ['/profile'];
 
// const intlMiddleware = createIntlMiddleware({
//   locales,
//   defaultLocale: 'ru'
// });
 
// const authMiddleware = withAuth(
//   // Note that this callback is only invoked if
//   // the `authorized` callback has returned `true`
//   // and not for pages listed in `pages`.
//   function onSuccess(req) {
//     return intlMiddleware(req);
//   },
//   {
//     callbacks: {
//       authorized: ({token}) => token != null
//     },
//     pages: {
//       signIn: '/'
//     }
//   }
// );
 
// export default function middleware(req: NextRequest) {
//   const publicPathnameRegex = RegExp(
//     `^(/(${locales.join('|')}))?(${publicPages.join('|')})?/?$`,
//     'i'
//   );
//   const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
 
//   if (isPublicPage) {
//     return intlMiddleware(req);
//   } else {
//     return (authMiddleware as any)(req);
//   }
// }
 
// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*).*)']
// };

