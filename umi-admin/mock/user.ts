// import { Request, Response } from 'express';

// const waitTime = (time: number = 100) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, time);
//   });
// };

// // 代码中会兼容本地 service mock 以及部署站点的静态数据
// export default {
//   // 支持值为 Object 和 Array
//   'GET /api/login/currentUser': (req: Request, res: Response) => {
//     res.send({
//       success: true,
//       data: {
//         name: 'Serati Ma',
//         avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
//         userid: '00000001',
//         email: 'antdesign@alipay.com',
//         signature: '海纳百川，有容乃大',
//         title: '交互专家',
//         group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
//         tags: [
//           {
//             key: '0',
//             label: '很有想法的',
//           },
//           {
//             key: '1',
//             label: '专注设计',
//           },
//           {
//             key: '2',
//             label: '辣~',
//           },
//           {
//             key: '3',
//             label: '大长腿',
//           },
//           {
//             key: '4',
//             label: '川妹子',
//           },
//           {
//             key: '5',
//             label: '海纳百川',
//           },
//         ],
//         notifyCount: 12,
//         unreadCount: 11,
//         country: 'China',
//         geographic: {
//           province: {
//             label: '浙江省',
//             key: '330000',
//           },
//           city: {
//             label: '杭州市',
//             key: '330100',
//           },
//         },
//         address: '西湖区工专路 77 号',
//         phone: '0752-268888888',
//       },
//     });
//   },
//   'POST /api/user/login': async (req: Request, res: Response) => {
//     const { password, username, type } = req.body;
//     await waitTime(2000);
//     if (password === '123456' && username === 'cyl') {
//       res.send({
//         status: 'ok',
//         username,
//       });
//       return;
//     }
//     res.send({
//       status: 'error',
//       type,
//       currentAuthority: 'guest',
//     });
//   },
//   'POST /api/user/outLogin': (req: Request, res: Response) => {
//     res.send({ data: {}, success: true });
//   },
//   'GET /api/500': (req: Request, res: Response) => {
//     res.status(500).send({
//       timestamp: 1513932555104,
//       status: 500,
//       error: 'error',
//       message: 'error',
//       path: '/base/category/list',
//     });
//   },
//   'GET /api/404': (req: Request, res: Response) => {
//     res.status(404).send({
//       timestamp: 1513932643431,
//       status: 404,
//       error: 'Not Found',
//       message: 'No message available',
//       path: '/base/category/list/2121212',
//     });
//   },
//   'GET /api/403': (req: Request, res: Response) => {
//     res.status(403).send({
//       timestamp: 1513932555104,
//       status: 403,
//       error: 'Forbidden',
//       message: 'Forbidden',
//       path: '/base/category/list',
//     });
//   },
//   'GET /api/401': (req: Request, res: Response) => {
//     res.status(401).send({
//       timestamp: 1513932555104,
//       status: 401,
//       error: 'Unauthorized',
//       message: 'Unauthorized',
//       path: '/base/category/list',
//     });
//   },
// };
