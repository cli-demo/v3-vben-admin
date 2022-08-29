import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/table',
  name: 'Table',
  component: LAYOUT,
  redirect: '/table/table',
  meta: {
    hideChildrenInMenu: false,
    icon: 'ion:layers-outline',
    title: t('routes.demo.table.table'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'basicsTable',
      name: 'BasicsTable',
      component: () => import('/@/views/table/index.vue'),
      meta: {
        title: t('routes.demo.table.basic'),
      },
    },
    {
      path: 'treeTable',
      name: 'TreeTable',
      component: () => import('/@/views/table/index2.vue'),
      meta: {
        title: t('routes.demo.table.treeTable'),
      },
    },
  ],
};

export default dashboard;
