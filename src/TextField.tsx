import React, {useState ,useRef} from 'react'

interface Person {
    firstName: string
    lastName: string
}

interface Props {
    text: string,
    person: Person
}

interface TextNode {
    text: string
}

export const TextField:React.FC<Props> = ({}) => {

     const [state, setCount] = useState<TextNode>({text: "hello "})
     const inputRef = useRef<HTMLInputElement>(null)

    return(
        <div>
            <input ref={inputRef}/>
        </div>
    )
}