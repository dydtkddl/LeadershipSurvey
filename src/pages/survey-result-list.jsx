// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import { SurveyResultList } from 'src/sections/surveyresultlist/view';

// ----------------------------------------------------------------------

export default function SurveyResultListPage() {
  return (
    <>
      <Helmet>
        <title> SurveyResultList | Minimal UI </title>
      </Helmet>

      <SurveyResultList/>
    </>
  );
}

SurveyResultListPage.propTypes = {
}