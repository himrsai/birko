import { environment } from './../../environments/environment.prod';
export enum AppService {
    LoginAccess = 'login',
    logoutAccess = 'login',
    Forgotpassword= 'forgot-password',
    ResetPassword = 'reset-password',
    GetUsersList = 'users'
}

export function getServiceUrl(serviceType: AppService, id: string = ''): string {
  let serviceUrl = environment.apiUrl;
  switch (serviceType) {
    case AppService.LoginAccess:
      serviceUrl += serviceType;
      break;
    case AppService.logoutAccess:
      serviceUrl += serviceType;
      break;
    case AppService.Forgotpassword:
      serviceUrl += serviceType;
      break;
    case AppService.ResetPassword:
      serviceUrl += serviceType;
      break;
    case AppService.GetUsersList:
      serviceUrl += serviceType+'/?role=team_user';
      break;
  }
  return serviceUrl;
}
