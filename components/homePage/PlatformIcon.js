import PropTypes from 'prop-types';

import Android from '../../assets/android.svg';
import Pc from '../../assets/pc.svg';
import Ps from '../../assets/ps.svg';
import Wii from '../../assets/wii.svg';
import Xbox from '../../assets/xbox.svg';

function PlatformIcon({ icon, className }) {
  return (
    <>
      {icon === 'android' && (
        <Android
          className={className}
          viewBox="0 0 100 100"
          width="100"
        />
      )}
      {icon === 'win' && (
        <Pc className={className} viewBox="0 0 100 100" width="100" />
      )}
      {icon === 'ps' && (
        <Ps className={className} viewBox="0 0 100 100" width="100" />
      )}
      {icon === 'wii' && (
        <Wii
          className={className}
          viewBox="0 0 100 100"
          width="100"
        />
      )}
      {icon === 'xbox' && (
        <Xbox
          className={className}
          viewBox="0 0 100 100"
          width="100"
        />
      )}
    </>
  );
}

PlatformIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PlatformIcon.defaultProps = {
  className: null,
};

export default PlatformIcon;
