import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { alertService } from 'services';

import { Alert, AlertTitle, Stack } from '@mui/material';

export { AlertModal };

Alert.propTypes = {
    id: PropTypes.string,
    fade: PropTypes.bool
};

Alert.defaultProps = {
    id: 'default-alert',
    fade: true
};

function AlertModal({ id, fade }) {
    const router = useRouter();
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
      // subscribe to new alert notifications
      const subscription = alertService.onAlert(id)
        .subscribe(alert => {
          // clear alerts when an empty alert is received
          if (!alert.message) {
            setAlerts(alerts => {
                // filter out alerts without 'keepAfterRouteChange' flag
                const filteredAlerts = alerts.filter(x => x.keepAfterRouteChange);
                // set 'keepAfterRouteChange' flag to false on the rest
                filteredAlerts.forEach(x => delete x.keepAfterRouteChange);
                return filteredAlerts;
            });
          } else {
            // add alert to array
            setAlerts(alerts => ([...alerts, alert]));
            // auto close alert 
            if (alert.autoClose) {
                setTimeout(() => removeAlert(alert), 2500);
            }
          }
        });


      // clear alerts on location change
      const clearAlerts = () => {
        setTimeout(() => alertService.clear(id));
      };
      router.events.on('routeChangeStart', clearAlerts);

      // clean up function that runs when the component unmounts
      return () => {
        subscription.unsubscribe();
        router.events.off('routeChangeStart', clearAlerts);
      };

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function removeAlert(alert) {
      if (fade) {
        // fade out alert
        const alertWithFade = { ...alert, fade: true };
        setAlerts(alerts => alerts.map(x => x === alert ? alertWithFade : x));

        // remove alert after faded out
        setTimeout(() => {
            setAlerts(alerts => alerts.filter(x => x !== alertWithFade));
        }, 250);
      } else {
        // remove alert
        setAlerts(alerts => alerts.filter(x => x !== alert));
      }
    };

    function cssClasses(alert) {
      if (!alert) return;

      const classes = ['alert', 'alert-dismissable'];

      // const alertTypeClass = {
      //   [AlertType.Success]: 'green',
      //   [AlertType.Error]: 'blue',
      //   [AlertType.Info]: 'blue',
      //   [AlertType.Warning]: 'yellow'
      // }

      // classes.push(alertTypeClass[alert.type]);

      if (alert.fade) {
        classes.push('fade');
      }

      return classes.join(' ');
    }


    if (!alerts.length) return null;

    return (
      <div>
        {alerts.map((alert, index) =>
          <Stack sx={{width: '100%'}} key={index}>
            <Alert severity="info">
              <AlertTitle dangerouslySetInnerHTML={{ __html: alert.message }}></AlertTitle>
            </Alert>
          </Stack>
          // <div key={index} className={style.wrapper}>
          //   <span className={style.text} dangerouslySetInnerHTML={{ __html: alert.message }}></span>
          // </div>
        )}
      </div>
    );
}
