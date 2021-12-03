import DropFile from './DropFile';

function Dnf() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box w-4/5 mx-auto">
            <div className="inner">
                <DropFile
                    onFileChange={(files) => onFileChange(files)}
                />
            </div>
        </div>
    );
}

export default Dnf;
