import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Index from "../components/index";
import Message from "../components/Message/message";
import Mine from "../components/Mine/mine";
import Video from "../components/Video/video";
import Login from "../components/Login/login";
import NotFound from "../components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/home", // 首页
        element: <Home />,
      },
      {
        path: "/message", // 消息
        element: <Message />,
      },
      {
        path: "/video", // 视频
        element: <Video />,
      },
      {
        path: "/mine", // 我的
        element: <Mine />,
      },
      {
        index: true, // 默认子路由
        element: <Navigate to="/home" />, // 重定向到 /home
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*", // 匹配未定义路径
    element: <NotFound />,
  },
]);

export default router;