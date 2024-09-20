import { useNavigate } from "react-router-dom";
function Driver() {
  const navigate = useNavigate();

  const getPatient = () => {
    const FetchData = async () => {};
  };

  return (
    <div className="">
        <div>
            <span>Thong tin bệnh nhân</span>
            <div></div>
        </div>
        <div className="flex">
            <table className=" table">
            <thead>
                <th>Name</th>
                <th>Phone</th>
                <th>Status</th>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td onClick={() => navigate(`/driver/patientinformation`)}>a</td>
                </tr>
            </tbody>
            </table>
            <div className="">
            <iframe
                className="flex-item2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d261.26028269866936!2d105.78252991397602!3d21.02856084553658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00954decbf%3A0xdb4ee23b49ad50c8!2zRlBUIEFwdGVjaCBIw6AgTuG7mWkgLSBI4buHIHRo4buRbmcgxJHDoG8gdOG6oW8gbOG6rXAgdHLDrG5oIHZpw6puIHF14buRYyB04bq_!5e0!3m2!1sen!2s!4v1726714889169!5m2!1sen!2s"
                width={500}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
        </div>
    </div>
  );
}
export default Driver;
