import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../../molecule/breadcrumbs';
import BrandTabs from '../../../molecule/brand-tabs';
import BrandForm from '../../../organism/brand-form';
import BrandTable from '../../../organism/brand-table';
import BrandUpload from '../../../organism/brand-upload';
import Notification from '../../../atom/notification';
import Loader from '../../../atom/loader';
import Layout from '../layout';
import style from './style.css';

const BrandUpdate = Layout(props => {
  const {notifications = [], links, breadcrumbs, tabs, content} = props;

  const notificationsList = notifications.map((notification, index) => {
    return (
      <div className={style.notification} key={index}>
        <Notification {...notification} />
      </div>
    );
  });

  const contentView = cont => {
    if (!cont) return <Loader />;
    const {type} = cont;
    switch (type) {
      case 'form':
        return <BrandForm {...cont} />;
      case 'list':
        return <BrandTable {...cont} />;
      case 'upload':
        return <BrandUpload {...cont} />;
    }
  };

  return (
    <div className={style.container}>
      <div>
        <Breadcrumbs links={links} breadcrumbs={breadcrumbs} />
      </div>
      <div>
        <BrandTabs tabs={tabs} />
      </div>
      <div className={style.notifications}>{notificationsList}</div>
      <div className={style.contentWrapper}>{contentView(content)}</div>
    </div>
  );
});

BrandUpdate.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape(Notification.propTypes)),
  breadcrumbs: Breadcrumbs.propTypes.breadcrumbs,
  links: Breadcrumbs.propTypes.links,
  tabs: BrandTabs.propTypes.tabs,
  content: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf(['form']),
      ...BrandForm.propTypes
    }),
    PropTypes.shape({
      type: PropTypes.oneOf(['list']),
      ...BrandTable.propTypes
    }),
    PropTypes.shape({
      type: PropTypes.oneOf(['upload']),
      ...BrandUpload.propTypes
    })
  ])
};

export default BrandUpdate;
