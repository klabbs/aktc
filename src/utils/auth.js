export const getDefaultRouteByRole = (role) => {
    switch (role) {
      case "admin":
        return "/admin"
      
      case "management":
        return "/management"

      case "instructor":
        return "/instructor"
  
      case "student":
        return "/student"
  
      default:
        return "/login"
    }
}