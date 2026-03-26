import { CheckCircle } from "lucide-react";

const INFRA_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAPFiTxbT4_pCttEmYkwj8h3-JR9UmST50bz-hqPN0k9KyLPtmbuES-vNFdGnNNHa0RGkpkMeyQjPqBitOhvfmR4H5_vImdDVbG9sBLZXn0Mfvs_fh393HhYCXEvSwxwHDwhsQT5QaimF2MXmXWg5Z6_JiqnNo2-Yik--Z7beVgVS277Ia7DuLEqh9TBy5EWJIaFqoawesGvZFyRgSqjN97iFjvz5ZDGPwbHfT6HbsZ40JwDevo6yMY84qd-tVzq4TtfLBbgUi0ki5F";

const features = [
  "Advanced 5-Axis CNC Centers",
  "High Precision Wire EDM",
  "Climate-Controlled Tool Room",
];

const InfrastructureSection = () => {
  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto w-full" id="infrastructure">
      <div className="bg-slate-900 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Text */}
        <div className="md:w-1/2 p-12 lg:p-20 space-y-8">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
            World-Class Facility
          </h2>
          <h3 className="text-white text-4xl md:text-5xl font-black">
            INFRASTRUCTURE
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Our modern tool room is equipped with the latest CNC, EDM, and
            Wire-Cut machines from world-renowned manufacturers. We maintain a
            controlled environment to ensure consistent precision for every
            component we produce.
          </p>
          <ul className="space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-white">
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-xl text-base font-bold hover:bg-primary transition-all">
            Take a Virtual Tour
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 relative min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${INFRA_BG}')` }}
          />
        </div>
      </div>
    </section>
  );
}

export default InfrastructureSection;