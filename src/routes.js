import Auth from "./pages/Auth";
import Inbox from "./pages/Inbox";
import {ADMIN_ROUTE, LOGIN_ROUTE, INBOX_ROUTE, REGISTRATION_ROUTE, MAIL_SEND} from "./utils/consts";
import Admin from "./pages/Admin";
import Mail from "./pages/Mail";
import MailSend from "./pages/MailSend";

export const authRoutes = [
    {
        path: INBOX_ROUTE,
        Component: Inbox
    },
    {
        path: INBOX_ROUTE + '/:id',
        Component: Mail
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: INBOX_ROUTE + '/new',
        Component: MailSend
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]
