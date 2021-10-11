import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Alert({ className }) {
  const { show, error, warning, success } = useSelector((state) => state.alert);

  return (
    <div className={className}>
      {show && (
        <>
          {error && (
            <div
              className="flex items-start p-2 mt-1 mb-6 border rounded-lg bg-red-error-bg border-red-500"
              role="alert"
            >
              <span className="p-2 rounded-lg bg-red-error">
                <FontAwesomeIcon
                  icon={['fas', 'circle-exclamation']}
                  className="w-6"
                />
              </span>
              <span className="self-center ml-4">
                {error ? error : 'Error'}
              </span>
            </div>
          )}
          {warning && (
            <div
              className="flex items-start p-2 mt-1 mb-6 border rounded-lg bg-yellow-warning-bg border-yellow-warning"
              role="alert"
            >
              <span className="p-2 rounded-lg bg-yellow-warning">
                <FontAwesomeIcon
                  icon={['fas', 'triangle-exclamation']}
                  className="w-6"
                />
              </span>
              <span className="self-center ml-4">
                {warning ? warning : 'Warning'}
              </span>
            </div>
          )}
          {success && (
            <div
              className="flex items-start p-2 mt-1 mb-6 border rounded-lg bg-green-success-bg border-green-success"
              role="alert"
            >
              <span className="p-2 rounded-lg bg-green-success">
                <FontAwesomeIcon
                  icon={['fas', 'circle-check']}
                  className="w-6"
                />
              </span>
              <span className="self-center ml-4">
                {success ? success : 'Success'}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
