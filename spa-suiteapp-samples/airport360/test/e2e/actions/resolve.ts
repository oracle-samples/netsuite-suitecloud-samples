// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import url from "../constants/request/url";

const Resolve = {
    loginCompanyRole: (role, companyId) =>
        `${url.LOGIN_COMPANY_ROLE}${companyId}&role=${role}`,
    viewSPA: (spa, spaUrl, page) =>
         `${url.SPA_APP}/${spa}/${spaUrl}/${page}`,
}

export default Resolve
