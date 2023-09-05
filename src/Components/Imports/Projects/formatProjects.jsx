import SimpleCard from '../../Cards/SimpleCard';

export default function FormatProjectHeading(props) {

  return (
        <div>
            <div className="flex flex-row flex-wrap justify-center text-center p-3">
                    {props.ProjectArray.map(({ href, description, title, id}) => (
                        <SimpleCard key={id} title={title} description={description} href={href} />
                    ))}
            </div>
        </div>
  );
}
