import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { alertService } from 'services';


export { AlertModal };

// Alert.propTypes = {
//     id: PropTypes.string,
//     fade: PropTypes.bool
// };

// Alert.defaultProps = {
//     id: 'default-alert',
//     fade: true
// };

function AlertModal({ id, fade }) {
    const router = useRouter();
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
      const subscription = alertService.onAlert(id)
        .subscribe(alert => {
          if (!alert.message) {
            setAlerts(alerts => {
                const filteredAlerts = alerts.filter(x => x.keepAfterRouteChange);
                // set 'keepAfterRouteChange' flag to false on the rest
                filteredAlerts.forEach(x => delete x.keepAfterRouteChange);
                return filteredAlerts;
            });
          } else {
            setAlerts(alerts => ([...alerts, alert]));
            toast.info(alert.message,{
              position: toast.POSITION.TOP_LEFT
            })
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

    return (
      <>
        <ToastContainer style={{width: '380px', fontWeight: 600}}/>
      </>
    );
}
