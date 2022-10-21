export default {
  api: {
    operationFailed: 'Operation failed',
    errorTip: 'Error Tip',
    errorMessage: 'The operation failed, the system is abnormal!',
    timeoutMessage: 'Login timed out, please log in again!',
    apiTimeoutMessage: 'The interface request timed out, please refresh the page and try again!',
    apiRequestFailed: 'The interface request failed, please try again later!',
    networkException: 'network anomaly',
    networkExceptionMsg:
      'Please check if your network connection is normal! The network is abnormal',

    errMsg401: 'The user does not have permission (token, user name, password error)!',
    errMsg403: 'The user is authorized, but access is forbidden!',
    errMsg404: 'Network request error, the resource was not found!',
    errMsg405: 'Network request error, request method not allowed!',
    errMsg408: 'Network request timed out!',
    errMsg500: 'Server error, please contact the administrator!',
    errMsg501: 'The network is not implemented!',
    errMsg502: 'Network Error!',
    errMsg503: 'The service is unavailable, the server is temporarily overloaded or maintained!',
    errMsg504: 'Network timeout!',
    errMsg505: 'The http version does not support the request!',
  },
  app: {
    logoutTip: 'Reminder',
    logoutMessage: 'Confirm to exit the system?',
    menuLoading: 'Menu loading...',
  },
  errorLog: {
    tableTitle: 'Error log list',
    tableColumnType: 'Type',
    tableColumnDate: 'Time',
    tableColumnFile: 'File',
    tableColumnMsg: 'Error message',
    tableColumnStackMsg: 'Stack info',

    tableActionDesc: 'Details',

    modalTitle: 'Error details',

    fireVueError: 'Fire vue error',
    fireResourceError: 'Fire resource error',
    fireAjaxError: 'Fire ajax error',

    enableMessage: 'Only effective when useErrorHandle=true in `/src/settings/projectSetting.ts`.',
  },
  exception: {
    backLogin: 'Back Login',
    backHome: 'Back Home',
    subTitle403: "Sorry, you don't have access to this page.",
    subTitle404: 'Sorry, the page you visited does not exist.',
    subTitle500: 'Sorry, the server is reporting an error.',
    noDataTitle: 'No data on the current page.',
    networkErrorTitle: 'Network Error',
    networkErrorSubTitle:
      'Sorry, Your network connection has been disconnected, please check your network!',
  },
  lock: {
    unlock: 'Click to unlock',
    alert: 'Lock screen password error',
    backToLogin: 'Back to login',
    entry: 'Enter the system',
    placeholder: 'Please enter the lock screen password or user password',
  },
  login: {
    backSignIn: 'Back sign in',
    mobileSignInFormTitle: 'Mobile sign in',
    qrSignInFormTitle: 'Qr code sign in',
    signInFormTitle: 'Sign in',
    emailSignUpFormTitle: 'Sign up by email',
    signUpFormTitle: 'Sign up',
    forgetFormTitle: 'Reset password',

    signInTitle: 'Distributed management system',
    signInDesc: 'Develop microservices management system in a short time',
    policy: 'I agree to the xxx Privacy Policy',
    scanSign: `scanning the code to complete the login`,

    loginButton: 'Sign in',
    registerButton: 'Sign up',
    rememberMe: 'Remember me',
    forgetPassword: 'Forget Password?',
    otherSignIn: 'Sign in with',

    // notify
    loginSuccessTitle: 'Login successful',
    loginSuccessDesc: 'Welcome back',
    signupSuccessTitle: 'Sign up successful',
    signupSuccessDesc: 'Welcome',
    signupUserExist: 'Username or email address had been registered',
    userNotExist: 'User is not registered',
    wrongCaptcha: 'Wrong captcha',
    wrongUsernameOrPassword: 'Wrong username or password',
    requireLogin: 'Please log in again',

    // placeholder
    accountPlaceholder: 'Please input username',
    passwordPlaceholder: 'Please input password',
    emailPlaceholder: 'Please enter your email address',
    smsPlaceholder: 'Please input sms code',
    mobilePlaceholder: 'Please input mobile',
    policyPlaceholder: 'Register after checking',
    diffPwd: 'The two passwords are inconsistent',

    username: 'Username',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    email: 'Email',
    smsCode: 'SMS code',
    mobile: 'Mobile',
    captcha: 'Captcha',
  },
  menu: {
    // noun
    menuName: 'Menu Name',
    menuTitle: 'Title Shown',
    icon: 'Icon',
    order: 'Order',
    component: 'Component',
    statusName: 'Status',
    type: 'Menu Type',
    directory: 'Directory',
    menu: 'Menu',
    button: 'Button',
    menuParent: 'Menu Parent',
    routePath: 'Route Path',
    componentPath: 'Component Path',
    isHttpPath: 'Http Path?',
    isKeepAlive: 'Keep Alive?',
    isShown: 'Show',
    isHidden: 'Hidden',
    isBreadcrumbShown: 'Show Breadcrumb?',
    currentActiveMenu: 'Active Tab',
    isAutoCloseTab: 'Auto Close Tab?',
    hideTab: 'Hide Tab',
    frameSrc: 'Iframe Path',
    carryParam: 'Carry Parameter',
    hideChildrenInMenu: 'Hide Children',
    affix: 'Affix Tab',
    dynamicLevel: 'Maximum opened Tab',
    realPath: 'Static Path',
    redirectPath: 'Redirect Path',
    menuParamManagement: 'Extra Parameters',
    paramKey: 'Key',
    paramType: 'Type',
    paramValue: 'Value',
    paramList: 'Parameter List',
    rootMenu: 'Root Menu',
    // action
    addMenu: 'Add Menu',
    editMenu: 'Eidt Menu',
    addMenuParam: 'Add Parameter',
    editMenuParam: 'Edit Parameter',
    // notification
    deleteChildrenDesc: "Please delete menu's children first",
    menuNotExists: 'Menu does not exist',
    menuAlreadyExists: 'Menu already exists',
    parentNotExist: 'The parent does not exist',
  },
  role: {
    // noun
    roleList: 'Role List',
    roleName: 'Role Name',
    roleTitle: 'Role',
    roleValue: 'Role Value',
    defaultRouter: 'Default Router Path',
    admin: 'Administrator',
    stuff: 'Stuff',
    seller: 'Seller',
    member: 'Member',
    // action
    addRole: 'Add Role',
    editRole: 'Edit Role',
    // notification
    changeStatusSuccess: 'Change role status successfully',
    changeStatusFailed: 'Change role status failed',
    duplicateRoleValue: 'Duplicate role value',
    userExists: 'Please delete users who belong to this role',
    roleForbidden: 'Your role is forbidden',
  },
  apis: {
    // noun
    apiList: 'API List',
    path: 'Path',
    description: 'Description',
    method: 'Method',
    group: 'Group',
    // action
    addApi: 'Add API',
    editApi: 'Edit API',
  },
  authority: {
    authorityManagement: 'Authorization Management',
    menuAuthority: 'Menu',
    apiAuthority: 'API',
  },
  user: {
    // noun
    userList: 'User List',
    nickname: 'Nickname',
    avatar: 'Avatar',
    oldPassword: 'Old Password',
    newPassword: 'New Password',
    // action
    addUser: 'Add User',
    editUser: 'Edit User',
    changePassword: 'Change Password',
    forceLoggingOut: 'Force logging out',
    // notification
    wrongPassword: 'Wrong Password',
  },
  init: {
    // noun
    initTitle: 'Initialize database',
    initProgressTitle: 'Progress',
    initCoreDatabase: 'Initialize core database',
    initFileDatabase: 'Initialize file manager database',

    // notification
    alreadyInit: 'The database had been initialized.',
    initializeIsRunning: 'The initialization is running...',
  },
  sys: {
    version: 'Version',
    Name: 'System Name',
    navigation: 'Navigation',
    info: 'System Information',
    // notification
    morning: 'Good morning',
    niceDay: 'have a nice day!',
  },
  dictionary: {
    // noun
    name: 'Dictionary Name',
    dictionaryList: 'Dictionary List',
    dictionaryDetailList: 'Key/Value List',
    // action
    addDictionary: 'Add Dictionary',
    addDictionaryDetail: 'Add Key/Value',
    editDictionary: 'Edit Dictionary',
    editDictionaryDetail: 'Edit Key/Value',
  },
  oauth: {
    // noun
    providerList: 'Provider List',
    clientID: 'Client ID',
    clientSecret: 'Client Secret',
    redirectURL: 'Redirect URL',
    scope: 'Scope',
    authURL: 'Authorization URL',
    tokenURL: 'Token URL',
    authStyle: 'Authorization Style',
    infoURL: 'User Info Path',
    autoDetect: 'Auto detect',
    params: 'Parameters Mode',
    header: 'Header Mode',
    callback: 'Callback interface',
    // action
    addProvider: 'Add Provider',
    // notification
    createAccount: 'Please register an account with this email or bind the email to an account',
  },
  token: {
    // noun
    tokenList: 'Token List',
  },
};
