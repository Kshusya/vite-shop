import { Magnifier, SideBySideMagnifier } from "@ricarso/react-image-magnifiers"

export default function Magnifier(props) {
    return <div>
                <SideBySideMagnifier
                    imageSrc={`/${props.id}.jpg`}
                />

                <Magnifier
                    imageSrc={`/${props.id}.jpg`}
                    imageAlt="Example"
                />
            </div>
    }