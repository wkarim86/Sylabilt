const settings =  {
  siteUrl  : 'http://localhost/sylabiltapi/',
  apiPath  : 'public/api/',
  apiToken : 'Jmnx9P8p3Y0rRy7yxkaLa5oF7IQ1ir5Y',
  apis     : {
    login           : 'user/login',
    signup          : 'register/user',
    oauth           : 'register/oauth',
    getUser         : 'users/',
    updateProfile   : 'user/update/profile',
    resetPassword   : 'user/reset_password',
    forgotPassword  : 'user/forgot_password',
    verifyEmail     : 'user/verify_email',
    fetchPosts      : 'post/',
    createPost      : 'post/create',
    updatePost      : 'post/update',
    upload          : 'upload/',
    addPostOptions  : 'post/add_options',
    getPostOptions  : 'post/options',
    upgradeMembership : 'upgrade/membership',
    sendInvite      : 'friends/send_invite',
    acceptInvite    : 'friends/accept_invite',
    rejectInvite    : 'friends/reject_invite',
    deleteFriend    : 'friends/delete'

  },
  requestTimeout : 1000

}
export default settings;
