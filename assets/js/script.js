        document.addEventListener('DOMContentLoaded', () => {

            // --- ESTRUCTURA DE DATOS ---

            // Preguntas del test (112 en total, 16 por área)
            const questions = [
                // Originales
                { id: 1, text: "¿Aceptarías colaborar en la sección de Economía de un diario?" },
                { id: 2, text: "¿Sabés administrar tu dinero?" },
                { id: 3, text: "¿Te gustaría formar parte de un proyecto de urbanización en tu provincia?" },
                { id: 4, text: "¿A una frustración, siempre oponés un pensamiento positivo?" },
                { id: 5, text: "¿Te dedicarías a asistir a personas accidentadas o que hayan sido atacadas?" },
                { id: 6, text: "¿Cuándo eras chico, desarmabas tus juguetes para saber cómo estaban fabricados?" },
                { id: 7, text: "¿Observás o investigás con frecuencia los misterios de la naturaleza?" },
                { id: 8, text: "¿Escuchás atentamente los problemas que te plantean tus amigos?" },
                { id: 9, text: "¿Solés ofrecerte para explicar a tus compañeros los temas que ellos no entendieron?" },
                { id: 10, text: "¿Te considerás exigente y crítico?" },
                { id: 11, text: "¿Te atraen las ferias de diseño y de objetos de vanguardia?" },
                { id: 12, text: "¿Conocés la diferencia conceptual entre macroeconomía y microeconomía?" },
                { id: 13, text: "¿Usar uniforme te hace sentir diferente o importante?" },
                { id: 14, text: "¿Te ofrecerías como doble de riesgo?" },
                { id: 15, text: "¿Te interesa encontrar argumentos precisos para explicar diferentes fenómenos?" },
                { id: 16, text: "¿Estás informado sobre nuevos descubrimientos que se están realizando acerca del Big Bang?" },
                { id: 17, text: "¿Ante una situación de emergencia, ¿actuás rápidamente?" },
                { id: 18, text: "Cuando tenés que resolver un problema matemático, ¿intentás alternativas para solucionarlo?" },
                { id: 19, text: "Si te convocan de tu club para organizar, planificar o dirigir un campo deportivo, ¿aceptarías?" },
                { id: 20, text: "¿El cine, el teatro y las artes, en general, forman parte de tu vida?" },
                { id: 21, text: "¿Crees que los detalles son tan importantes como el todo?" },
                { id: 22, text: "¿Te sentirías a gusto trabajando en un ámbito hospitalario?" },
                { id: 23, text: "¿Te gustaría participar para mantener el orden ante grandes catástrofes o desórdenes?" },
                { id: 24, text: "Si tuvieras que elegir un suplemento periodístico, elegirías Cultura antes que Economía." },
                { id: 25, text: "¿Planificás detalladamente la tarea antes de empezar un trabajo?" },
                { id: 26, text: "¿Te apasiona la tecnología?" },
                { id: 27, text: "¿Disfrutás ensayando diferentes técnicas de arte?" },
                { id: 28, text: "¿Ayudás habitualmente a personas no videntes a cruzar la calle?" },
                { id: 29, text: "¿Considerás importante que se fomente la actitud crítica y la participación activa?" },
                { id: 30, text: "¿Aceptarías que las mujeres formen parte de las fuerzas armadas al igual que los hombres?" },
                { id: 31, text: "¿Te gustaría crear técnicas para descubrir las patologías de algunas enfermedades?" },
                { id: 32, text: "¿Participarías en una campaña de prevención del VIH (Sida)?" },
                { id: 33, text: "¿Te interesan los temas relacionados con el pasado y la evolución del hombre?" },
                { id: 34, text: "¿El canal de televisión Natural Geographic, se encuentra entre tus favoritos?" },
                { id: 35, text: "¿Los demás consideran que una de tus características es ser emprendedor?" },
                { id: 36, text: "¿Te interesan actividades de mucha acción y de reacción rápida en situaciones de peligro o imprevistos?" },
                { id: 37, text: "¿Te ofrecerías en proyectos relacionados con la automatización?" },
                { id: 38, text: "¿Tenés más habilidad para el trabajo creativo que para el trabajo intelectual?" },
                { id: 39, text: "¿Estarías dispuesto a renunciar a un momento placentero para ofrecer tu servicio como profesional?" },
                { id: 40, text: "¿Participarías de una investigación acerca de la violencia en el fútbol?" },
                { id: 41, text: "¿Te gustaría trabajar en un laboratorio mientras cursas tus estudios?" },
                { id: 42, text: "¿Arriesgarías tu vida para salvar la de un extraño?" },
                { id: 43, text: "¿Te gustaría hacer un curso de primeros auxilios?" },
                { id: 44, text: "¿Te interesaría conocer cómo se produce un audiovisual?" },
                { id: 45, text: "¿Planificás tus tareas semanales?" },
                { id: 46, text: "¿Te mudarías a un campo para desarrollar tus actividades como profesional?" },
                { id: 47, text: "¿Harías un curso para aprender a fabricar máquinas y herramientas?" },
                { id: 48, text: "¿Elegirías una profesión en la que tuvieras que estar algunos meses lejos de tu familia?" },
                { id: 49, text: "Cuando estás en un grupo de trabajo, ¿te da satisfacción producir ideas originales y que las consideren?" },
                { id: 50, text: "¿Crees que te resulta fácil supervisar o coordinar un grupo de trabajo?" },
                { id: 51, text: "¿Te interesan las ciencias biológicas?" },
                { id: 52, text: "¿Te gustaría formar parte del equipo comercial de una gran empresa?" },
                { id: 53, text: "¿Participarías de un proyecto nacional de desarrollo de la principal fuente de recursos de tu provincia?" },
                { id: 54, text: "¿Te interesa saber cuáles son las causas que determinan ciertos fenómenos, aunque no influyan en vos?" },
                { id: 55, text: "¿Te identificás con las ideas de algún filósofo o escritor?" },
                { id: 56, text: "En general, ¿optás por películas que te dejan un mensaje o enseñanza?" },
                { id: 57, text: "¿Colaborarías con el cumplimiento de las normas en lugares públicos?" },
                { id: 58, text: "¿Te considerás hábil para la planificación, el control y los cálculos?" },
                { id: 59, text: "Cuando se descompone un aparato en tu casa, ¿lo reparás?" },
                { id: 60, text: "¿Formarías parte de un equipo de trabajo orientado a la preservación de la flora y fauna en extinción?" },
                { id: 61, text: "¿Acostumbrás leer revistas relacionadas con los últimos avances científicos y tecnológicos en la salud?" },
                { id: 62, text: "¿Te parece importante y necesario preservar las raíces culturales de nuestro país?" },
                { id: 63, text: "¿Estarías interesado en emprender acciones para optimizar los recursos económicos de los países?" },
                { id: 64, text: "¿Te gustaría trabajar en el puerto o en la aduana realizando tareas de entrada y salida de mercaderías?" },
                { id: 65, text: "¿Crees que el país debe poseer la más alta tecnología armamentista a cualquier precio?" },
                { id: 66, text: "¿La libertad y la justicia son valores importantes en tu vida?" },
                { id: 67, text: "¿Aceptarías hacer una práctica rentada en la industria alimentaria, en el sector de control de calidad?" },
                { id: 68, text: "¿Considerás que la salud pública debe ser prioritaria, gratuita y eficiente para todos?" },
                { id: 69, text: "¿Te interesa conocer los avances en el tratamiento de enfermedades?" },
                { id: 70, text: "¿Te parece importante conocer con profundidad el comportamiento de la sociedad de consumo?" },
                { id: 71, text: "En una discusión entre amigos, ¿te ofrecés como mediador?" },
                { id: 72, text: "¿Estás de acuerdo con la formación de un cuerpo de soldados profesionales?" },
                { id: 73, text: "¿Te atrae conocer los fenómenos de la comunicación humana?" },
                { id: 74, text: "¿Te gustaría investigar cientificamente sobre cultivos agrícolas?" },
                { id: 75, text: "¿Sos creativo y te gusta improvisar nuevos diseños en tu ropa?" },
                { id: 76, text: "¿Visitarías un observatorio astronómico para conocer en acción su funcionamiento?" },
                { id: 77, text: "¿Dirigirías el área de importación y exportación de una empresa?" },
                { id: 78, text: "¿No tenés problema en trabajar solo, sin el contacto frecuente de otras personas?" },
                { id: 79, text: "¿Te gratificaría trabajar con niños?" },
                { id: 80, text: "¿Trabajarías realizando auditorías?" },
                { id: 81, text: "¿Dirigirías un grupo de teatro independiente?" },
                { id: 82, text: "¿Enviarías tu currículum a una empresa automotriz que solicita gente para el área de producción?" },
                { id: 83, text: "¿Participarías en un grupo de defensa internacional dentro de alguna fuerza armada?" },
                { id: 84, text: "¿Te interesa compartir y tratar de buscar la excelencia en las cosas que emprendés?" },
                { id: 85, text: "¿Generalmente tratás de luchar por una causa justa?" },
                { id: 86, text: "Ante una emergencia epidémica, ¿participarías en una campaña brindando tu ayuda?" },
                { id: 87, text: "¿Sabés responder que significan ADN y ARN?" },
                { id: 88, text: "¿Generalmente tratás de relacionar sucesos para encontrar respuestas?" },
                { id: 89, text: "¿Trabajar con máquinas o herramientas te resulta más gratificante que trabajar con personas?" },
                { id: 90, text: "¿Te resultaría gratificante ser asesor contable de una empresa?" },
                { id: 91, text: "¿Te ofrecerías a dar clases de apoyo escolar en un colegio?" },
                { id: 92, text: "¿Te atrae investigar sobre los misterios del universo, por ejemplo, los agujeros negros?" },
                { id: 93, text: "¿Considerás que tenés un gran poder de observación?" },
                { id: 94, text: "¿Participarías de un grupo de ayuda a personas carenciadas?" },
                { id: 95, text: "Cuando elegís tu ropa o decorás un ambiente, ¿tenés en cuenta la combinación de los colores?" },
                { id: 96, text: "¿Te gustaría trabajar como profesional dirigiendo la construcción de una empresa hidroeléctrica?" },
                { id: 97, text: "¿Te informás con frecuencia acerca de los últimos avances tecnológicos?" },
                { id: 98, text: "¿Te gustaría investigar sobre los misterios del universo?" },
                // Nuevas
                { id: 99, text: "¿Disfrutas creando y gestionando hojas de cálculo para organizar información?" },
                { id: 100, text: "¿Te sientes cómodo/a en un rol que requiera supervisar presupuestos y gastos?" },
                { id: 101, text: "¿Te gustaría mediar en conflictos para ayudar a las partes a llegar a un acuerdo?" },
                { id: 102, text: "¿Disfrutas investigando sobre diferentes culturas y sus formas de organización social?" },
                { id: 103, text: "¿Te gustaría aprender sobre la historia del arte y la evolución de sus movimientos?" },
                { id: 104, text: "¿Disfrutas experimentando con software de edición de video o de sonido?" },
                { id: 105, text: "¿Te interesaría aprender sobre nutrición y cómo la alimentación impacta en el cuerpo?" },
                { id: 106, text: "¿Te gustaría especializarte en el cuidado de la salud mental?" },
                { id: 107, text: "¿Disfrutas resolviendo problemas de hardware o software en computadoras?" },
                { id: 108, text: "¿Te interesaría aprender a programar y desarrollar aplicaciones o sitios web?" },
                { id: 109, text: "¿Te interesaría aprender sobre ciberseguridad para proteger información y sistemas?" },
                { id: 110, text: "¿Te atrae la idea de trabajar en inteligencia y análisis de información estratégica?" },
                { id: 111, text: "¿Disfrutas resolviendo acertijos lógicos y problemas matemáticos complejos?" },
                { id: 112, text: "¿Te gustaría trabajar en un laboratorio analizando muestras químicas o biológicas?" }
            ].sort((a,b) => a.id - b.id);

            // Mapeo de preguntas a áreas (16 por área)
            const balancedMapping = {
                C: [2, 12, 15, 19, 21, 25, 35, 45, 50, 52, 58, 63, 77, 80, 99, 100],
                H: [8, 9, 24, 29, 33, 40, 55, 56, 62, 66, 70, 71, 85, 91, 101, 102],
                A: [11, 20, 27, 38, 39, 44, 49, 75, 81, 95, 96, 103, 104, 53, 64, 1],
                S: [4, 5, 22, 28, 31, 32, 42, 43, 51, 61, 68, 69, 79, 86, 105, 106],
                I: [6, 10, 18, 26, 37, 41, 47, 59, 89, 90, 97, 107, 108, 82, 94, 78],
                D: [3, 13, 14, 17, 23, 30, 36, 48, 57, 65, 72, 83, 84, 109, 110, 67],
                E: [7, 16, 34, 46, 54, 60, 74, 76, 87, 88, 92, 93, 98, 111, 112, 73]
            };


            // Descripciones de las áreas
            const areaInfo = {
                C: {
                    title: "Administrativas y Contables",
                    description: "Personas a las que les gusta trabajar con datos, de forma ordenada y sistemática. Poseen habilidad numérica, son metódicos, eficientes y responsables. Se sienten cómodos en ambientes de negocios, finanzas y contabilidad.",
                    color: "bg-blue-500",
                    emoji: "📊"
                },
                H: {
                    title: "Humanísticas y Sociales",
                    description: "Interés por el ser humano, la justicia, la enseñanza y los fenómenos sociales. Son personas sociables, comprensivas y con buena capacidad de comunicación verbal y escrita. Disfrutan de interactuar, ayudar y guiar a otros.",
                    color: "bg-orange-500",
                    emoji: "🤝"
                },
                A: {
                    title: "Artísticas",
                    description: "Personas con una marcada sensibilidad por la estética, la armonía y la expresión. Son creativas, imaginativas e intuitivas. Disfrutan de actividades relacionadas con el diseño, la música, el arte y la comunicación visual.",
                    color: "bg-purple-500",
                    emoji: "🎨"
                },
                S: {
                    title: "Salud",
                    description: "Vocación de servicio y un fuerte interés por el bienestar de los demás y los seres vivos. Son personas altruistas, pacientes y con precisión. Se inclinan por la investigación y el cuidado en el ámbito de las ciencias de la salud.",
                    color: "bg-red-500",
                    emoji: "❤️‍🩹"
                },
                I: {
                    title: "Técnicas y Computación",
                    description: "Interés por la tecnología, las máquinas, las herramientas y los procesos. Son personas prácticas, analíticas y con habilidad para el cálculo y el razonamiento lógico. Disfrutan de resolver problemas concretos y trabajar con tecnología.",
                    color: "bg-gray-600",
                    emoji: "⚙️"
                },
                D: {
                    title: "Defensa y Seguridad",
                    description: "Personas con un fuerte sentido de la justicia, el orden y la protección. Tienen espíritu de equipo, son valientes y con capacidad de liderazgo. Se sienten atraídos por actividades que implican disciplina y servicio a la comunidad.",
                    color: "bg-green-600",
                    emoji: "🛡️"
                },
                E: {
                    title: "Exactas y Naturales",
                    description: "Fuerte curiosidad por investigar y comprender los fenómenos de la naturaleza y el universo. Son personas observadoras, analíticas y metódicas. Disfrutan de la investigación, los números y el trabajo en laboratorio.",
                    color: "bg-teal-500",
                    emoji: "🔬"
                }
            };

            // Base de datos de carreras actualizada con la nueva información
            const careerData = {
                C: [
                    { name: "Contador Público", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" },
                        { name: "Universidad Austral", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Administración", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" },
                        { name: "Universidad Austral", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Profesorado de Educación Secundaria en Administración", institutions: [
                        { name: "Instituto Superior de Profesorado N° 1 \"Manuel Leiva\"", type: "Público", city: "Casilda" }
                    ]},
                    { name: "Lic. en Economía", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Católica Argentina (Economía Empresarial)", type: "Privado", city: "Rosario" },
                        { name: "Universidad Austral (Economía Empresarial)", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Profesorado de Educación Secundaria en Economía", institutions: [
                        { name: "Instituto Superior de Profesorado N° 1 \"Manuel Leiva\"", type: "Público", city: "Casilda" }
                    ]},
                    { name: "Lic. en Marketing", institutions: [
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" },
                        { name: "Universidad Austral", type: "Privado", city: "Rosario" },
                        { name: "Instituto TEC", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Recursos Humanos", institutions: [
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" },
                        { name: "Instituto TEC", type: "Privado", city: "Rosario" }
                    ]},
                     { name: "Lic. en Logística (Ciclo)", institutions: [
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Comercio Internacional", institutions: [
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Técnico Superior en Gestión de las Organizaciones", institutions: [
                        { name: "Instituto Superior de Profesorado N° 1 \"Manuel Leiva\"", type: "Público", city: "Casilda" },
                        { name: "Instituto Superior de Profesorado N° 5 \"Perito Francisco Moreno\"", type: "Público", city: "Cañada de Gomez" }
                    ]},
                    { name: "Administración de Empresas (Instituto TEC)", institutions: [
                        { name: "Instituto TEC", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Agronegocios", institutions: [
                        { name: "Universidad Austral", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Gestión de Negocios Digitales", institutions: [
                        { name: "Universidad Austral", type: "Privado", city: "Rosario" },
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Martillero Público, Corredor Inmobiliario", institutions: [
                        { name: "Universidad Nacional de Rosario (Corretaje Inmobiliario)", type: "Público", city: "Rosario" },
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Estadística", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]}
                ],
                H: [
                    { name: "Derecho / Abogacía", institutions: [
                        { name: "Universidad del Centro Educativo Latinoamericano", type: "Privado", city: "Casilda" },
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Notariado", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Psicología", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Psicopedagogía", institutions: [
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" },
                        { name: "Universidad del Gran Rosario", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Profesorado de Educación Primaria", institutions: [
                        { name: "Instituto Superior de Profesorado N° 1 \"Manuel Leiva\"", type: "Público", city: "Casilda" }
                    ]},
                    { name: "Profesorado de Educación Inicial", institutions: [
                        { name: "Instituto Superior de Profesorado N° 1 \"Manuel Leiva\"", type: "Público", city: "Casilda" }
                    ]},
                    { name: "Profesorado de Educación Secundaria en Lengua y Literatura", institutions: [
                        { name: "Instituto Superior de Profesorado N° 1 \"Manuel Leiva\"", type: "Público", city: "Casilda" },
                        { name: "Instituto de Educación Superior N° 28 \"Olga Cossettini\"", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Profesorado de Historia", institutions: [
                        { name: "Instituto Superior de Profesorado N° 62 \"Ángela Cullen\"", type: "Público", city: "San José de la Esquina" },
                        { name: "Instituto de Educación Superior N° 28 \"Olga Cossettini\"", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Profesorado de Geografía", institutions: [
                        { name: "Instituto Superior de Profesorado N° 62 \"Ángela Cullen\"", type: "Público", city: "San José de la Esquina" }
                    ]},
                    { name: "Profesorado en Ciencia de la Educación", institutions: [
                        { name: "Instituto Superior de Profesorado N° 5 \"Perito Francisco Moreno\"", type: "Público", city: "Cañada de Gomez" }
                    ]},
                    { name: "Profesorado de Inglés", institutions: [
                        { name: "Instituto Superior de Profesorado N° 5 \"Perito Francisco Moreno\"", type: "Público", city: "Cañada de Gomez" }
                    ]},
                    { name: "Profesorado en Educación Especial", institutions: [
                        { name: "Instituto Superior de Profesorado N° 5 \"Perito Francisco Moreno\"", type: "Público", city: "Cañada de Gomez" }
                    ]},
                    { name: "Lic. en Trabajo Social", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Ciencia Política", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Relaciones Internacionales", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Comunicación Social", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Periodismo", institutions: [
                        { name: "Universidad Católica Argentina (Comunicación Periodística)", type: "Privado", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Antropología", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Filosofía", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                     { name: "Lic. en Letras", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Turismo", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" },
                        { name: "Instituto TEC", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Traductorado Público Nacional de Portugués", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                     { name: "Traductorado Literario y Técnico-Científico en Inglés", institutions: [
                        { name: "Instituto de Educación Superior N° 28 \"Olga Cossettini\"", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Relaciones Públicas", institutions: [
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" },
                        { name: "Instituto TEC", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Ceremonial y Organización de Eventos", institutions: [
                        { name: "Instituto TEC", type: "Privado", city: "Rosario" }
                    ]}
                ],
                A: [
                    { name: "Arquitectura", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Diseño Gráfico", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Diseño Industrial", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Diseño de Indumentaria", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Diseño de Interiores", institutions: [
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" },
                        { name: "Universidad del Gran Rosario (Ciclo)", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Bellas Artes", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Música (Canto, Composición, Dirección, etc.)", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Producción y Realización Audiovisual", institutions: [
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Publicidad", institutions: [
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" },
                        { name: "Universidad Católica Argentina (Comunicación Publicitaria)", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Técnico Superior en Gastronomía", institutions: [
                        { name: "Instituto TEC", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Gestión Cultural", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]}
                ],
                S: [
                    { name: "Medicina", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Medicina Veterinaria", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Casilda" }
                    ]},
                    { name: "Tecnicatura Superior en Enfermería", institutions: [
                        { name: "ISPI N° 9203 \"Cruz Roja Argentina\"", type: "Público", city: "Casilda" }
                    ]},
                    { name: "Lic. en Enfermería", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Tecnicatura Superior en Radiología", institutions: [
                        { name: "ISPI N° 9203 \"Cruz Roja Argentina\"", type: "Público", city: "Casilda" }
                    ]},
                    { name: "Lic. en Producción de Bioimágenes", institutions: [
                         { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Bioquímica", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Farmacia", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Fonoaudiología", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Nutrición", institutions: [
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Kinesiología y Fisiatría", institutions: [
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" },
                        { name: "Universidad del Gran Rosario", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Terapia Ocupacional", institutions: [
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" },
                        { name: "Universidad del Gran Rosario", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Instrumentación Quirúrgica", institutions: [
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Tec. en Acompañamiento Terapéutico", institutions: [
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" },
                        { name: "Universidad del Gran Rosario", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Profesorado en Educación Física", institutions: [
                        { name: "Instituto Superior de Profesorado N° 5 \"Perito Francisco Moreno\"", type: "Público", city: "Cañada de Gomez" }
                    ]},
                    { name: "Educación Física y Lic. del Deporte", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" },
                        { name: "Universidad del Gran Rosario (Lic. en Actividad Física)", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Ciencia y Tecnología de los Alimentos", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]}
                ],
                I: [
                    { name: "Ingeniería Civil", institutions: [ 
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Tecnológica Nacional", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Ingeniería Eléctrica", institutions: [ { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" } ]},
                    { name: "Ingeniería en Energía Eléctrica", institutions: [ { name: "Universidad Tecnológica Nacional", type: "Público", city: "Rosario" } ]},
                    { name: "Ingeniería Electrónica", institutions: [ { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" } ]},
                    { name: "Ingeniería Industrial", institutions: [ 
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Ingeniería Mecánica", institutions: [ 
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" },
                        { name: "Universidad Tecnológica Nacional", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Ingeniería Química", institutions: [ 
                        { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" },
                        { name: "Universidad Tecnológica Nacional", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Ingeniería Ambiental", institutions: [ { name: "Universidad Católica Argentina", type: "Privado", city: "Rosario" } ]},
                    { name: "Ingeniería en Sistemas de Información", institutions: [
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" },
                        { name: "Universidad Tecnológica Nacional", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Ciencias de la Computación", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Técnico Superior en Desarrollo de Software", institutions: [
                        { name: "Instituto Superior de Profesorado N° 1 \"Manuel Leiva\"", type: "Público", city: "Casilda" }
                    ]},
                    { name: "Técnico Superior en Análisis Funcional de Sistemas Informáticos", institutions: [
                         { name: "Instituto Superior de Profesorado N° 62 \"Ángela Cullen\"", type: "Público", city: "San José de la Esquina" }
                    ]},
                    { name: "Tecnicatura Universitaria en Programación", institutions: [
                        { name: "Universidad Austral", type: "Privado", city: "Rosario" },
                        { name: "Universidad Tecnológica Nacional", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Producción de Simuladores y Videojuegos", institutions: [
                        { name: "Universidad Abierta Interamericana", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Técnico Superior en Higiene y Seguridad en el Trabajo", institutions: [
                        { name: "Instituto Superior de Profesorado N° 62 \"Ángela Cullen\"", type: "Público", city: "San José de la Esquina" }
                    ]},
                    { name: "Tecnicatura Universitaria en Higiene y Seguridad en el Trabajo", institutions: [
                        { name: "Universidad Tecnológica Nacional", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Ciclo de Lic. en Higiene y Seguridad Laboral", institutions: [
                        { name: "Universidad del Gran Rosario", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Lic. en Ciencia de Datos", institutions: [
                        { name: "Universidad Austral", type: "Privado", city: "Rosario" },
                        { name: "Universidad del Gran Rosario (Ciclo)", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Profesorado en Educación Tecnológica", institutions: [
                        { name: "Instituto Superior de Profesorado N° 5 \"Perito Francisco Moreno\"", type: "Público", city: "Cañada de Gomez" }
                    ]}
                ],
                D: [
                    { name: "Lic. en Seguridad Ciudadana", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Ciclo de Lic. en Seguridad Pública y Ciudadana", institutions: [
                         { name: "Universidad del Gran Rosario", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Tecnicatura Universitaria en Ciberseguridad", institutions: [
                         { name: "Universidad del Gran Rosario", type: "Privado", city: "Rosario" }
                    ]},
                    { name: "Carrera Militar (Ejército, Fuerza Aérea)", institutions: [
                        { name: "Colegio Militar de la Nación / Escuela de Aviación Militar", type: "Público", city: "Varias (fuera de la región, con delegaciones)" },
                    ]},
                    { name: "Prefectura Naval / Gendarmería", institutions: [
                        { name: "Institutos de formación específicos", type: "Público", city: "Varias (fuera de la región, con delegaciones)" },
                    ]},
                ],
                E: [
                    { name: "Ingeniería Agronómica", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Zavalla" }
                    ]},
                    { name: "Lic. en Recursos Naturales", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Zavalla" }
                    ]},
                    { name: "Profesorado de Educación Secundaria en Biología", institutions: [
                        { name: "Instituto Superior de Profesorado N° 1 \"Manuel Leiva\"", type: "Público", city: "Casilda" }
                    ]},
                    { name: "Profesorado de Educación Secundaria en Matemática", institutions: [
                        { name: "Instituto Superior de Profesorado N° 1 \"Manuel Leiva\"", type: "Público", city: "Casilda" },
                        { name: "Instituto de Educación Superior N° 28 \"Olga Cossettini\"", type: "Público", city: "Rosario" },
                    ]},
                    { name: "Profesorado de Educación Secundaria en Física", institutions: [
                         { name: "Instituto de Educación Superior N° 28 \"Olga Cossettini\"", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Biotecnología", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Química", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Física", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Lic. en Matemática", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Agrimensura", institutions: [
                        { name: "Universidad Nacional de Rosario", type: "Público", city: "Rosario" }
                    ]},
                    { name: "Técnico Superior Analista en Medio Ambiente", institutions: [
                        { name: "Instituto Superior de Profesorado N° 1 \"Manuel Leiva\"", type: "Público", city: "Casilda" }
                    ]},
                    { name: "Tecnicatura Universitaria en Saneamiento y Producción de Agua Potable", institutions: [
                        { name: "Universidad Tecnológica Nacional", type: "Público", city: "Rosario" }
                    ]}
                ]
            };


            // --- ESTADO DE LA APLICACIÓN ---
            let currentPageIndex = 0;
            const questionsPerPage = 8; // Ajustado para mejor paginación
            const totalPages = Math.ceil(questions.length / questionsPerPage);
            let userAnswers = new Set();
            let userName = '';
            let userEmail = '';
            let lastScores = null;
            let N8N_WEBHOOK_URL = localStorage.getItem('n8n_webhook_url') || 'https://n8n.tu-dominio.com/webhook/test-chaside-resultados';

            // --- ELEMENTOS DEL DOM ---
            const appContainer = document.getElementById('app-container');
            const welcomeScreen = document.getElementById('welcome-screen');
            const quizScreen = document.getElementById('quiz-screen');
            const resultsScreen = document.getElementById('results-screen');
            const nameModal = document.getElementById('name-modal');
            const startBtn = document.getElementById('start-btn');
            const questionsContainer = document.getElementById('questions-container');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const finishBtn = document.getElementById('finish-btn');
            const restartBtn = document.getElementById('restart-btn');
            const printBtn = document.getElementById('print-btn');
            const sendEmailBtn = document.getElementById('send-email-btn');
            const emailStatusContainer = document.getElementById('email-status-container');
            const submitNameBtn = document.getElementById('submit-name-btn');
            const nameInput = document.getElementById('name-input');
            const emailInput = document.getElementById('email-input');
            const progressBar = document.getElementById('progress-bar');
            const currentPageSpan = document.getElementById('current-page');
            const totalPagesSpan = document.getElementById('total-pages');
            const resultsTitle = document.getElementById('results-title');
            const resultsIntroText = document.getElementById('results-intro-text');
            const statusModal = document.getElementById('status-modal');
            const statusModalIcon = document.getElementById('status-modal-icon');
            const statusModalTitle = document.getElementById('status-modal-title');
            const statusModalMessage = document.getElementById('status-modal-message');
            const statusModalCloseBtn = document.getElementById('status-modal-close-btn');

            // --- LÓGICA DE PERSISTENCIA LOCAL (RELOAD TOLERANCE) ---
            function saveProgress() {
                localStorage.setItem('chaside_answers', JSON.stringify(Array.from(userAnswers)));
                localStorage.setItem('chaside_page', currentPageIndex.toString());
                if (userName) localStorage.setItem('chaside_name', userName);
                if (userEmail) localStorage.setItem('chaside_email', userEmail);
            }

            function loadProgress() {
                const savedAnswers = localStorage.getItem('chaside_answers');
                const savedPage = localStorage.getItem('chaside_page');
                const savedName = localStorage.getItem('chaside_name');
                const savedEmail = localStorage.getItem('chaside_email');

                if (savedAnswers) {
                    try {
                        const arr = JSON.parse(savedAnswers);
                        userAnswers = new Set(arr);
                    } catch (e) { console.error('Error cargando respuestas guardadas', e); }
                }
                if (savedPage !== null) {
                    currentPageIndex = parseInt(savedPage) || 0;
                }
                if (savedName) {
                    userName = savedName;
                    if (nameInput) nameInput.value = userName;
                }
                if (savedEmail) {
                    userEmail = savedEmail;
                    if (emailInput) emailInput.value = userEmail;
                }
            }

            function clearProgress() {
                localStorage.removeItem('chaside_answers');
                localStorage.removeItem('chaside_page');
                localStorage.removeItem('chaside_name');
                localStorage.removeItem('chaside_email');
                userAnswers.clear();
                currentPageIndex = 0;
                userName = '';
                userEmail = '';
                if (nameInput) nameInput.value = '';
                if (emailInput) emailInput.value = '';
            }

            // --- LÓGICA DE LA APLICACIÓN ---

            function init() {
                loadProgress();

                startBtn.addEventListener('click', startQuiz);
                nextBtn.addEventListener('click', nextPage);
                prevBtn.addEventListener('click', prevPage);
                finishBtn.addEventListener('click', () => nameModal.classList.remove('hidden'));
                submitNameBtn.addEventListener('click', showResults);
                restartBtn.addEventListener('click', restartQuiz);
                printBtn.addEventListener('click', printResults);
                if (sendEmailBtn) sendEmailBtn.addEventListener('click', sendResultsByEmail);
                if (statusModalCloseBtn) statusModalCloseBtn.addEventListener('click', () => statusModal.classList.add('hidden'));

                // Restaurar test en progreso si existen respuestas guardadas
                if (userAnswers.size > 0 || currentPageIndex > 0) {
                    welcomeScreen.classList.add('hidden');
                    quizScreen.classList.remove('hidden');
                    renderCurrentPage();
                }
            }

            function startQuiz() {
                welcomeScreen.classList.add('hidden');
                quizScreen.classList.remove('hidden');
                if (userAnswers.size === 0) {
                    currentPageIndex = 0;
                }
                renderCurrentPage();
            }
            
            function restartQuiz() {
                clearProgress();
                resultsScreen.classList.add('hidden');
                welcomeScreen.classList.remove('hidden');
            }

            function renderCurrentPage() {
                questionsContainer.innerHTML = '';
                const startIndex = currentPageIndex * questionsPerPage;
                const endIndex = startIndex + questionsPerPage;
                const pageQuestions = questions.slice(startIndex, endIndex);

                pageQuestions.forEach(q => {
                    const isChecked = userAnswers.has(q.id) ? 'checked' : '';
                    const questionElement = `
                        <div class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-colors">
                            <label for="q-${q.id}" class="flex-grow text-gray-700 cursor-pointer">${q.id}. ${q.text}</label>
                            <input type="checkbox" id="q-${q.id}" data-id="${q.id}" class="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" ${isChecked}>
                        </div>
                    `;
                    questionsContainer.insertAdjacentHTML('beforeend', questionElement);
                });

                // Añadir event listeners a los nuevos checkboxes
                questionsContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                    checkbox.addEventListener('change', (e) => {
                        const id = parseInt(e.target.dataset.id);
                        if (e.target.checked) {
                            userAnswers.add(id);
                        } else {
                            userAnswers.delete(id);
                        }
                        saveProgress();
                    });
                });

                updateNavigation();
                updateProgressBar();
            }

            function updateNavigation() {
                prevBtn.classList.toggle('hidden', currentPageIndex === 0);
                nextBtn.classList.toggle('hidden', currentPageIndex === totalPages - 1);
                finishBtn.classList.toggle('hidden', currentPageIndex !== totalPages - 1);
                currentPageSpan.textContent = currentPageIndex + 1;
                totalPagesSpan.textContent = totalPages;
            }

            function updateProgressBar() {
                const progress = ((currentPageIndex + 1) / totalPages) * 100;
                progressBar.style.width = `${progress}%`;
            }

            function nextPage() {
                if (currentPageIndex < totalPages - 1) {
                    currentPageIndex++;
                    saveProgress();
                    renderCurrentPage();
                    appContainer.scrollIntoView();
                }
            }

            function prevPage() {
                if (currentPageIndex > 0) {
                    currentPageIndex--;
                    saveProgress();
                    renderCurrentPage();
                    appContainer.scrollIntoView();
                }
            }

            function isValidEmail(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            }

            function showResults() {
                const modalErrorMsg = document.getElementById('modal-error-msg');
                const valName = nameInput ? nameInput.value.trim() : '';
                const valEmail = emailInput ? emailInput.value.trim() : '';

                if (!valName) {
                    if (modalErrorMsg) {
                        modalErrorMsg.textContent = 'Por favor, ingresa tu Nombre Completo para continuar.';
                        modalErrorMsg.classList.remove('hidden');
                    }
                    return;
                }

                if (!valEmail || !isValidEmail(valEmail)) {
                    if (modalErrorMsg) {
                        modalErrorMsg.textContent = 'Por favor, ingresa un correo electrónico válido (ej: usuario@dominio.com).';
                        modalErrorMsg.classList.remove('hidden');
                    }
                    return;
                }

                if (modalErrorMsg) modalErrorMsg.classList.add('hidden');

                userName = valName;
                userEmail = valEmail;
                saveProgress();

                nameModal.classList.add('hidden');
                
                // 1. Mostrar la pantalla de resultados y obtener contenedores
                quizScreen.classList.add('hidden');
                resultsScreen.classList.remove('hidden');
                appContainer.scrollIntoView();
                
                const chartContainer = document.getElementById('chart-container');
                const chartDiv = document.getElementById('chart');
                const recommendationsContainer = document.getElementById('career-recommendations');
                
                // Limpiar resultados previos
                chartDiv.innerHTML = '';
                recommendationsContainer.innerHTML = '';

                // Personalizar título
                resultsTitle.textContent = `Los Resultados de ${userName}`;

                // 2. VALIDACIÓN: Chequear si hay al menos una respuesta
                if (userAnswers.size === 0) {
                    resultsIntroText.textContent = "No has seleccionado ninguna respuesta.";
                    chartContainer.classList.add('hidden'); // Ocultar el contenedor del gráfico
                    const noAnswersHtml = `
                        <div class="card p-8 text-center bg-yellow-50 border-yellow-400 border">
                            <h2 class="text-2xl font-bold text-yellow-800 mb-4">No se pueden generar resultados</h2>
                            <p class="text-yellow-700">Para poder sugerirte un perfil y carreras, necesitas marcar al menos una pregunta con la que te identifiques.</p>
                            <p class="text-yellow-700 mt-2">¡Inténtalo de nuevo!</p>
                        </div>
                    `;
                    recommendationsContainer.insertAdjacentHTML('beforeend', noAnswersHtml);
                    lastScores = null; // No hay resultados para imprimir
                    return; // Detener la ejecución aquí
                }

                // 3. Si hay respuestas, asegurarse que el gráfico sea visible y calcular
                resultsIntroText.textContent = "Estos son tus principales intereses vocacionales basados en tus respuestas.";
                chartContainer.classList.remove('hidden');

                const scores = { C: 0, H: 0, A: 0, S: 0, I: 0, D: 0, E: 0 };
                userAnswers.forEach(answerId => {
                    for (const area in balancedMapping) {
                        if (balancedMapping[area].includes(answerId)) {
                            scores[area]++;
                        }
                    }
                });

                const sortedScores = Object.entries(scores)
                    .map(([area, score]) => ({ area, score }))
                    .sort((a, b) => b.score - a.score);

                lastScores = sortedScores; // Guardar los resultados para la impresión

                // 4. Renderizar el gráfico
                sortedScores.forEach(item => {
                    const info = areaInfo[item.area];
                    const maxScore = 16;
                    const percentage = (item.score / maxScore) * 100;
                    const barHtml = `
                        <div class="flex items-center">
                            <span class="w-48 text-sm md:text-base font-semibold text-gray-600 text-right pr-4">${info.title}</span>
                            <div class="flex-grow bg-gray-200 rounded-full h-6">
                                <div class="${info.color} h-6 rounded-full flex items-center justify-end pr-2 text-white font-bold" style="width: ${percentage}%">
                                    ${item.score}
                                </div>
                            </div>
                        </div>
                    `;
                    chartDiv.insertAdjacentHTML('beforeend', barHtml);
                });

                // 5. Renderizar las recomendaciones
                const topAreas = sortedScores.slice(0, 2); 

                topAreas.forEach((item, index) => {
                    if (item.score === 0) return; // No mostrar áreas con 0 puntos
                    
                    const info = areaInfo[item.area];
                    const careers = careerData[item.area] || [];

                    let careersHtml = careers.map(career => {
                        let institutionsHtml = career.institutions.map(inst => `
                            <li class="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2">
                                <span class="mb-1 sm:mb-0">${inst.name}</span>
                                <div class="flex items-center gap-2 flex-shrink-0">
                                    <span class="text-xs font-semibold ${inst.type.toLowerCase().startsWith('púb') ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} px-2 py-1 rounded-full">${inst.type}</span>
                                    <span class="text-xs font-semibold bg-gray-100 text-gray-800 px-2 py-1 rounded-full">${inst.city}</span>
                                </div>
                            </li>
                        `).join('');

                        return `
                            <details class="group bg-white p-4 rounded-lg border hover:border-indigo-300">
                                <summary class="flex justify-between items-center font-semibold text-lg text-gray-800">
                                    <span>${career.name}</span>
                                    <span class="arrow text-indigo-500 transform transition-transform duration-200">▶</span>
                                </summary>
                                <ul class="mt-4 space-y-2 divide-y divide-gray-100">
                                    ${institutionsHtml}
                                </ul>
                            </details>
                        `;
                    }).join('');

                    if (careers.length === 0) {
                        careersHtml = `<p class="text-gray-500">No se encontraron carreras específicas en la región para esta área, pero te animamos a investigar campos relacionados.</p>`;
                    }

                    const recommendationHtml = `
                        <div class="card p-8">
                            <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
                                <span class="text-4xl">${info.emoji}</span>
                                <span>${info.title}</span>
                            </h2>
                            <p class="text-gray-600 mb-6">${info.description}</p>
                            <h3 class="text-xl font-bold text-gray-700 mb-4">Carreras Sugeridas:</h3>
                            <div class="space-y-3">
                                ${careersHtml}
                            </div>
                        </div>
                    `;
                    recommendationsContainer.insertAdjacentHTML('beforeend', recommendationHtml);
                });
            }

            function showStatusModal(title, message, type = 'info', showButton = true) {
                if (!statusModal) return;

                statusModalTitle.textContent = title;
                statusModalMessage.textContent = message;

                if (type === 'loading') {
                    statusModalIcon.innerHTML = `
                        <svg class="animate-spin h-12 w-12 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    `;
                } else if (type === 'success') {
                    statusModalIcon.innerHTML = `<span class="text-green-500 text-5xl">✅</span>`;
                } else if (type === 'error') {
                    statusModalIcon.innerHTML = `<span class="text-amber-500 text-5xl">⚠️</span>`;
                } else {
                    statusModalIcon.innerHTML = `<span class="text-indigo-500 text-5xl">ℹ️</span>`;
                }

                if (showButton) {
                    statusModalCloseBtn.classList.remove('hidden');
                } else {
                    statusModalCloseBtn.classList.add('hidden');
                }

                statusModal.classList.remove('hidden');
            }

            async function sendResultsByEmail() {
                if (!lastScores || userAnswers.size === 0) {
                    showStatusModal("Aviso", "No hay resultados suficientes para enviar por correo.", "error", true);
                    return;
                }

                // Si el correo no existe o no es válido, se vuelve a abrir el modal de datos sin usar la ventana prompt
                if (!userEmail || !isValidEmail(userEmail)) {
                    nameModal.classList.remove('hidden');
                    return;
                }

                showStatusModal("Enviando Correo", `Enviando tu informe vocacional a ${userEmail}...`, "loading", false);

                // Construcción de la información completa de las 7 áreas vocacionales
                const todasLasAreas = lastScores.map(item => ({
                    codigoArea: item.area,
                    titulo: areaInfo[item.area].title,
                    emoji: areaInfo[item.area].emoji,
                    puntaje: item.score,
                    puntajeMaximo: 16,
                    porcentaje: Math.round((item.score / 16) * 100),
                    descripcion: areaInfo[item.area].description,
                    carrerasSugeridas: (careerData[item.area] || []).map(c => ({
                        carrera: c.name,
                        instituciones: c.institutions
                    }))
                }));

                const topAreas = todasLasAreas.slice(0, 2);

                const payload = {
                    usuario: {
                        nombre: userName,
                        email: userEmail,
                        fechaEnvio: new Date().toLocaleDateString('es-AR') + ' ' + new Date().toLocaleTimeString('es-AR')
                    },
                    metadatosTest: {
                        totalPreguntasRespondidas: userAnswers.size,
                        preguntasSeleccionadasIds: Array.from(userAnswers)
                    },
                    perfilDestacado: topAreas,
                    todasLasAreas: todasLasAreas,
                    puntajesResumen: Object.fromEntries(lastScores.map(i => [i.area, i.score]))
                };

                try {
                    // Envío directo al Webhook sin requerir backend Flask local
                    const response = await fetch(N8N_WEBHOOK_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (response.ok) {
                        showStatusModal("¡Envío Exitoso!", `El informe vocacional fue enviado con éxito a ${userEmail}`, "success", true);
                    } else {
                        throw new Error("Respuesta no válida del servidor");
                    }
                } catch (error) {
                    console.error("Error al enviar correo:", error);
                    showStatusModal("Aviso", "No se pudo enviar el correo en este momento. Puedes utilizar la opción de imprimir resultados.", "error", true);
                }
            }

function printResults() {
    if (!lastScores) {
        alert("No hay resultados para imprimir. Por favor, completa el test primero.");
        return;
    }

    const fechaActual = new Date().toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    
    // Obtener la URL absoluta del logo para asegurar su renderizado en la ventana de impresión
    const logoUrl = window.location.href.replace(/[^/]*$/, '') + 'assets/img/logo-expo-carreras.png';

    // Generar detalle de áreas destacadas y carreras/instituciones sugeridas (sin puntajes numéricos)
    const topAreas = lastScores.slice(0, 2);
    let detalleAreasHtml = '';

    topAreas.forEach(item => {
        if (item.score === 0) return;
        const info = areaInfo[item.area];
        const careers = careerData[item.area] || [];

        let carrerasHtml = careers.map(c => {
            const instHtml = c.institutions.map(inst => `
                <li style="font-size: 10px; color: #374151; margin-bottom: 2px; line-height: 1.3;">
                    • <strong>${inst.name}</strong> 
                    <span style="font-size: 9px; color: #4b5563; background: #f3f4f6; padding: 1px 5px; border-radius: 3px; font-weight: 500;">${inst.city}</span>
                    <span style="font-size: 9px; color: #1d4ed8; background: #eff6ff; padding: 1px 5px; border-radius: 3px; font-weight: 600;">${inst.type}</span>
                </li>
            `).join('');

            return `
                <div style="margin-bottom: 8px; background: #f9fafb; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #4f46e5; page-break-inside: avoid; break-inside: avoid;">
                    <div style="font-weight: 700; font-size: 11px; color: #111827; margin-bottom: 3px;">${c.name}</div>
                    <ul style="list-style: none; padding-left: 0; margin: 0;">
                        ${instHtml}
                    </ul>
                </div>
            `;
        }).join('');

        detalleAreasHtml += `
            <div style="margin-bottom: 16px;">
                <div style="display: flex; align-items: center; gap: 8px; border-bottom: 2px solid #e0e7ff; padding-bottom: 4px; margin-bottom: 6px;">
                    <span style="font-size: 18px;">${info.emoji}</span>
                    <h3 style="font-size: 14px; font-weight: 800; color: #1e1b4b; margin: 0;">${info.title}</h3>
                </div>
                <p style="font-size: 11px; color: #4b5563; margin-top: 4px; margin-bottom: 8px; line-height: 1.4;">${info.description}</p>
                <div style="font-weight: 700; font-size: 11px; color: #374151; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.3px;">Carreras e Instituciones Recomendadas:</div>
                ${carrerasHtml}
            </div>
        `;
    });

    const printWindow = window.open('', '_blank');
    const printContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Recomendación Vocacional - ${userName}</title>
            <style>
                @page {
                    size: A4 portrait;
                    margin: 15mm;
                }
                * {
                    box-sizing: border-box;
                }
                html, body {
                    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
                    color: #1f2937;
                    background: #ffffff;
                    font-size: 11px;
                    line-height: 1.3;
                    margin: 0;
                    padding: 0;
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }
                .print-wrapper {
                    width: 100%;
                    margin: 0 auto;
                }
                .header-table {
                    width: 100%;
                    border-collapse: collapse;
                    border-bottom: 2px solid #4f46e5;
                    padding-bottom: 8px;
                    margin-bottom: 12px;
                }
                .logo-img {
                    height: 48px;
                    max-width: 220px;
                    object-fit: contain;
                }
                .doc-title {
                    text-align: right;
                }
                .doc-title h1 {
                    font-size: 16px;
                    font-weight: 800;
                    color: #4f46e5;
                    margin: 0 0 2px 0;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .doc-title p {
                    font-size: 10px;
                    color: #6b7280;
                    margin: 0;
                }
                .user-card {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 6px;
                    padding: 8px 14px;
                    margin-bottom: 14px;
                    width: 100%;
                    border-collapse: collapse;
                }
                .user-card td {
                    padding: 2px 8px;
                }
                .user-field-label {
                    font-weight: 700;
                    color: #64748b;
                    text-transform: uppercase;
                    font-size: 8px;
                    display: block;
                }
                .user-field-value {
                    font-weight: 600;
                    color: #0f172a;
                    font-size: 11px;
                }
                .section-header {
                    font-size: 12px;
                    font-weight: 800;
                    color: #1e293b;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                    letter-spacing: 0.3px;
                    border-bottom: 1px solid #cbd5e1;
                    padding-bottom: 4px;
                }
                .footer {
                    margin-top: 16px;
                    border-top: 1px solid #e5e7eb;
                    padding-top: 8px;
                    text-align: center;
                    font-size: 9px;
                    color: #9ca3af;
                }
            </style>
        </head>
        <body>
            <div class="print-wrapper">
                <!-- Encabezado del Documento -->
                <table class="header-table">
                    <tr>
                        <td style="vertical-align: middle;">
                            <img src="${logoUrl}" alt="Logo EXPO-CARRERAS" class="logo-img">
                        </td>
                        <td class="doc-title" style="vertical-align: middle;">
                            <h1>Recomendación Vocacional</h1>
                            <p>Informe de Carreras e Instituciones</p>
                        </td>
                    </tr>
                </table>

                <!-- Ficha del Estudiante compacta en Tabla -->
                <table class="user-card">
                    <tr>
                        <td style="width: 40%;">
                            <span class="user-field-label">Estudiante</span>
                            <span class="user-field-value">${userName}</span>
                        </td>
                        <td style="width: 35%;">
                            <span class="user-field-label">Email</span>
                            <span class="user-field-value">${userEmail || 'No especificado'}</span>
                        </td>
                        <td style="width: 25%; text-align: right;">
                            <span class="user-field-label">Fecha</span>
                            <span class="user-field-value">${fechaActual}</span>
                        </td>
                    </tr>
                </table>

                <!-- Carreras e Instituciones Recomendadas sin saltos forzados de bloque completo -->
                <div class="section-header">Carreras e Instituciones Recomendadas según Perfil Vocacional</div>
                ${detalleAreasHtml}

                <!-- Pie de Página -->
                <div class="footer">
                    Documento de Orientación Vocacional | EXPO-CARRERAS
                </div>
            </div>

            <script>
                window.onload = function() {
                    setTimeout(function() {
                        window.print();
                        window.close();
                    }, 350);
                };
            <\/script>
        </body>
        </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
}

            // Iniciar la aplicación
            init();
        });