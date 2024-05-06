import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Surveys',
    path: '/Surveys',
    icon: icon('ic_user'),
  },
  {
    title: 'Results',
    path: '/Results',
    icon: icon('ic_cart'),
  },
  
 
  
];

export default navConfig;
