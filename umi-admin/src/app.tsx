import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import { history } from 'umi';
import RightContent from '@/components/RightContent'
import { currentUser as queryCurrentUser } from './services/api';

const loginPath = '/user/login'

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

export async function getInitialState(): Promise<API.IUser> {
  const user_token: string | null = sessionStorage.getItem('All_token');
  const fetchUserInfo = async (users: string | undefined) => {
    try {
      const msg = await queryCurrentUser({ username: users });
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath && user_token !== null) {
    const userInfo_token = JSON.parse(user_token);
    const currentUser = await fetchUserInfo(userInfo_token?.username);
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }
  return {
    fetchUserInfo,
    settings: {},
  };
}

export const layout = ({ initialState, }: {
  initialState: { settings?: LayoutSettings; currentUser?: {} };
}): BasicLayoutProps => {
  return {
    rightContentRender: () => <RightContent />,
    // footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== '/user/login') {
        history.push('/user/login');
      }
    },
    menuHeaderRender: undefined,
    ...initialState?.settings,
  };
};