import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const charts: AppRouteModule = {
  path: '/charts',
  name: 'Charts',
  component: LAYOUT,
  redirect: '/charts/charts/pie',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: t('routes.demo.charts.charts'),
  },
  children: [
    {
      path: 'echarts',
      name: 'Echarts',
      component: getParentLayout('Echarts'),
      meta: {
        title: 'Echarts',
      },
      redirect: '/charts/charts/pie',
      children: [
        {
          path: 'pie',
          name: 'Pie',
          component: () => import('/@/views/charts/Pie.vue'),
          meta: {
            title: t('routes.demo.charts.pie'),
          },
        },
        {
          path: 'line',
          name: 'Line',
          component: () => import('/@/views/charts/Line.vue'),
          meta: {
            title: t('routes.demo.charts.line'),
          },
        },
      ],
    },
  ],
};

export default charts;
