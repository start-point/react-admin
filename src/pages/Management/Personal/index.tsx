import { useState } from 'react';
import {
  Button,
  Descriptions,
  Card,
  Form,
  Upload,
  Row,
  Col,
  Input,
  Avatar,
} from 'antd';
import ImgCrop from 'antd-img-crop';
import CreateModal from '@/utils/model';
import { PageContainer } from '@ant-design/pro-layout';
import Process from './process';
import { connect, useModel } from 'umi';
import styles from '../style.less';

const Personal = ({ dispatch, users }: { dispatch: any; users: any }) => {
  const { initialState, setInitialState } = useModel<any>('@@initialState');
  const [initial, setInitial] = useState<any>(initialState.currentUser); // 控制弹窗
  const [bool, setBool] = useState<boolean>(true);
  const name = sessionStorage.getItem('user_name');
  const [visible, setVisible] = useState<boolean>(false); // 控制弹窗
  const [fileList, setFileList] = useState<never[]>([]); // 头像
  console.log(users.userInfo.data, 'user....');

  if (users.userInfo.data && bool) {
    const d = users.userInfo.data;
    setInitialState((v: any) => ({
      ...v,
      currentUser: { ...v.currentUser, ...d },
    }));
    setBool((b) => !b);
  }

  console.log(initialState, 'initialState.....');
  const onChange = ({ fileList: newFileList }: { fileList: any }) => {
    setFileList(newFileList);
  };

  // 预览图片 打开一个新的窗口
  const onPreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    window.open(image.src)?.document.write(image.outerHTML);
  };

  // 确定
  const onCreate = async (vals: { name: string }) => {
    if (name) {
      dispatch({
        type: 'users/userInfos',
        payload: {
          info: {
            username: initialState?.currentUser.username || name,
            info: vals,
            fileList: fileList[0],
          },
          setInitialState,
          setInitial,
        },
      });
      setVisible((s) => !s);
    }
  };

  // 取消
  const onCancel = () => {
    setVisible((s) => !s);
  };

  const content = (
    <>
      <Descriptions.Item label="名称">{initial?.name}</Descriptions.Item>
      <Descriptions.Item label="邮箱">
        <a>{initial?.email}</a>
      </Descriptions.Item>
      <Descriptions.Item label="工作地区">{initial?.area}</Descriptions.Item>
      <Descriptions.Item label="名言警句">{initial?.saying}</Descriptions.Item>
      <Descriptions.Item label="个人介绍">
        {initial?.introduce}
      </Descriptions.Item>
    </>
  );

  const modalContent = (
    <>
      <Row>
        <Col span={14}>
          <Form.Item
            name="name"
            label="名称"
            rules={[
              {
                required: true,
              },
              {
                pattern: /^[^\s]*$/,
                message: '不允许空格哟',
              },
            ]}
          >
            <Input placeholder="发挥你的才能,想一个意义深长的名字吧" />
          </Form.Item>
        </Col>
        <Col span={4} offset={4}>
          <ImgCrop rotate>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 1 && '+ 头像上传'}
            </Upload>
          </ImgCrop>
        </Col>
      </Row>
      <Form.Item name="email" label="邮箱账号">
        <Input placeholder="可以写上自己的邮箱" />
      </Form.Item>
      <Form.Item name="area" label="工作地区">
        <Input placeholder="你也可以留下自己的工作的地方" />
      </Form.Item>
      <Form.Item name="saying" label="名言警句">
        <Input placeholder="写上你自己名言警句,他会在主页展示" />
      </Form.Item>
      <Form.Item name="introduce" label="个人介绍">
        <Input.TextArea
          placeholder="可以介绍一下,帅气的自己"
          showCount
          maxLength={200}
        />
      </Form.Item>
    </>
  );

  return (
    <>
      <div className={styles.card_avatar}>
        <Card hoverable>
          <Avatar
            draggable
            alt="暂无图片或加载资源出错"
            src={initialState.currentUser?.avatar}
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          />
        </Card>
      </div>
      <div className={styles.card_avatar}>
        <Card>
          <Descriptions
            title="个人资料"
            extra={
              <Button onClick={() => setVisible(true)} type="primary">
                Edit
              </Button>
            }
          >
            {content}
          </Descriptions>
        </Card>
      </div>
      <CreateModal
        visible={visible}
        onCreate={onCreate}
        onCancel={onCancel}
        modalContent={modalContent}
        initialValue={initialState?.currentUser}
      />
    </>
  );
};

const mapStateToProps = ({ users }: { users: string }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(Personal);
