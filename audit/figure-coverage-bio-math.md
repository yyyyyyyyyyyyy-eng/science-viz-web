# Figure coverage — AP Biology & AP Calculus BC (+ prerequisites)

Generated from `data/{bio,math}/figures.js` (TOPIC_FIGURES). Every figure is an SVG computed from real functions/data (fixed viewBox, `width:100%`, fixed aspect ratio, wrapper `max-width:min(100%,560px)`); captions use KaTeX with `\dfrac` stacked fractions.

Unique figures: bio 125, math 174, total 299. Verified via Playwright (box Chrome) on audit/figure-preview-bio-math.html: 412 topic-figure placements, 0 console errors, 0 KaTeX errors, 0 overflow at 380px, no aspect/height drift on resize.

## bio

### bio-prep-chem
- [x] **P1.1 Measurement and Significant Figures** — `experiment-design` Experimental design: control vs treatment with error bars; `c14-decay` Radioactive decay of ¹⁴C
- [x] **P1.2 Atomic Structure and Isotopes** — `bohr-carbon` Atomic structure: carbon-12 (Bohr model); `isotopes` Isotopes of carbon (natural abundance); `c14-decay` Radioactive decay of ¹⁴C
- [x] **P1.3 Periodic Table** — `periodic-radius` Periodic trend: atomic radius vs atomic number; `electronegativity` Electronegativity across period 2
- [x] **P1.4 Ionic and Covalent Bonding** — `bond-types` Ionic vs covalent bonding; `electronegativity` Electronegativity across period 2
- [x] **P1.5 Molecular Geometry and Polarity** — `vsepr` Molecular geometry (VSEPR); `water-hbond` Water polarity and hydrogen bonding
- [x] **P1.6 Chemical Reactions and Stoichiometry** — `stoich` Stoichiometry: mole ratios
- [x] **P1.7 Solutions and Concentration** — `solubility` Solubility curves; `water-potential` Water potential Ψ = Ψs + Ψp
- [x] **P1.8 Acids, Bases, and pH** — `ph-scale` The pH scale; `titration` Titration curve: strong acid with strong base
- [x] **P1.9 Water and Hydrogen Bonding** — `water-hbond` Water polarity and hydrogen bonding; `water-density` Density of water vs temperature; `specific-heat` Specific heat of water vs other substances
- [x] **P1.10 Intro Organic Functional Groups** — `functional-groups` Functional groups in biological molecules
- [x] **P1.11 Intro Thermochemistry** — `exo-endo` Exergonic vs endergonic reactions; `activation-energy` Activation energy with and without enzyme
- [x] **P1.12 Intro Kinetics and Equilibrium** — `rate-equilibrium` Reaction rate and equilibrium; `activation-energy` Activation energy with and without enzyme

### bio-prep-hs
- [x] **P2.1 Scientific Method and Experimental Design** — `experiment-design` Experimental design: control vs treatment with error bars
- [x] **P2.2 Biological Macromolecules** — `macromolecules` Dehydration synthesis and hydrolysis; `protein-structure` Levels of protein structure
- [x] **P2.3 Cell Structure** — `cell-structure` Eukaryotic cells: animal vs plant
- [x] **P2.4 Cell Membrane and Transport** — `transport-types` Membrane transport types; `tonicity` Tonicity: animal and plant cells
- [x] **P2.5 Enzymes** — `enz-temp` Enzyme activity vs temperature; `enz-ph` Enzyme activity vs pH; `activation-energy` Activation energy with and without enzyme
- [x] **P2.6 Photosynthesis Overview** — `photo-resp-cycle` Photosynthesis and respiration are complementary; `absorption-spectrum` Absorption and action spectra of photosynthesis
- [x] **P2.7 Cellular Respiration Overview** — `respiration-overview` Cellular respiration pathway; `photo-resp-cycle` Photosynthesis and respiration are complementary
- [x] **P2.8 Mitosis and Meiosis** — `mitosis-stages` Mitosis stages (2n = 4); `meiosis-stages` Meiosis I and II (2n = 4 → four n = 2 cells)
- [x] **P2.9 Mendelian Genetics** — `punnett-mono` Punnett square: monohybrid cross Aa × Aa; `pedigree-ar` Pedigree: autosomal recessive
- [x] **P2.10 DNA and Protein Synthesis Intro** — `central-dogma` Central dogma: DNA → RNA → protein; `dna-structure` DNA double helix: antiparallel strands & base pairing
- [x] **P2.11 Natural Selection Intro** — `sel-directional` Directional selection; `antibiotic-resistance` Continuing evolution: antibiotic resistance
- [x] **P2.12 Ecological Levels and Energy Flow** — `food-chain` Food chain and trophic levels; `energy-pyramid` Energy pyramid (≈10% transfer); `food-web` Food web
- [x] **P2.13 Human Body Systems Overview** — `body-systems` Human body systems working together; `feedback-glucose` Negative feedback: blood glucose regulation
- [x] **P2.14 Biodiversity** — `species-area` Species–area relationship; `diversity-index` Biodiversity: Simpson's diversity index

### bio-u1
- [x] **1.1 Structure of Water and Hydrogen Bonding** — `water-hbond` Water polarity and hydrogen bonding; `specific-heat` Specific heat of water vs other substances; `water-density` Density of water vs temperature
- [x] **1.2 Elements of Life** — `body-elements` Elements of life: human body composition by mass
- [x] **1.3 Introduction to Biological Macromolecules** — `macromolecules` Dehydration synthesis and hydrolysis
- [x] **1.4 Properties of Biological Macromolecules** — `protein-structure` Levels of protein structure; `functional-groups` Functional groups in biological molecules
- [x] **1.5 Nucleic Acids** — `dna-structure` DNA double helix: antiparallel strands & base pairing
- [x] **1.6 Structure and Function of Enzymes** — `induced-fit` Enzyme–substrate induced fit; `activation-energy` Activation energy with and without enzyme

### bio-u2
- [x] **2.1 Cell Structure: Subcellular Components** — `cell-structure` Eukaryotic cells: animal vs plant; `endomembrane` Endomembrane system: protein secretion pathway
- [x] **2.2 Cell Size** — `sa-volume` Cell size: surface-area-to-volume ratio
- [x] **2.3 Plasma Membranes** — `fluid-mosaic` Fluid mosaic model of the plasma membrane
- [x] **2.4 Membrane Permeability** — `permeability` Selective permeability of the bilayer
- [x] **2.5 Membrane Transport** — `transport-types` Membrane transport types; `diffusion-rate` Simple vs facilitated diffusion rate
- [x] **2.6 Facilitated Diffusion** — `diffusion-rate` Simple vs facilitated diffusion rate; `transport-types` Membrane transport types
- [x] **2.7 Tonicity and Osmoregulation** — `tonicity` Tonicity: animal and plant cells; `water-potential` Water potential Ψ = Ψs + Ψp; `osmosis-potato` Osmosis lab: % mass change vs sucrose molarity
- [x] **2.8 Mechanisms of Transport** — `na-k-pump` Na⁺/K⁺-ATPase cycle and bulk transport; `transport-types` Membrane transport types
- [x] **2.9 Compartmentalization** — `endomembrane` Endomembrane system: protein secretion pathway; `etc` Electron transport chain & chemiosmosis
- [x] **2.10 Origins of Cell Compartmentalization** — `endosymbiosis` Endosymbiotic theory

### bio-u3
- [x] **3.1 Enzyme Catalysis** — `activation-energy` Activation energy with and without enzyme; `enz-substrate` Reaction rate vs substrate concentration (Michaelis–Menten); `enz-inhibition` Competitive vs noncompetitive inhibition; `induced-fit` Enzyme–substrate induced fit
- [x] **3.2 Environmental Impacts on Enzyme Function** — `enz-temp` Enzyme activity vs temperature; `enz-ph` Enzyme activity vs pH; `enz-inhibition` Competitive vs noncompetitive inhibition
- [x] **3.3 Cellular Energy** — `atp-cycle` ATP/ADP cycle and energy coupling; `exo-endo` Exergonic vs endergonic reactions
- [x] **3.4 Photosynthesis** — `light-reactions` Light reactions: thylakoid electron transport; `calvin-cycle` Calvin cycle (light-independent reactions); `absorption-spectrum` Absorption and action spectra of photosynthesis; `photo-rate-light` Photosynthesis rate vs light intensity and CO₂
- [x] **3.5 Cellular Respiration** — `respiration-overview` Cellular respiration pathway; `etc` Electron transport chain & chemiosmosis; `atp-yield` ATP yield per glucose by stage; `fermentation` Fermentation vs aerobic respiration; `respirometer` Respirometer data: O₂ consumption vs temperature
- [x] **3.6 Fitness** — `metabolic-temp` Fitness & metabolism: endotherm vs ectotherm

### bio-u4
- [x] **4.1 Cell Communication** — `signal-types` Types of cell signaling
- [x] **4.2 Introduction to Signal Transduction** — `signal-transduction` Signal transduction: GPCR → cAMP cascade
- [x] **4.3 Signal Transduction** — `signal-transduction` Signal transduction: GPCR → cAMP cascade; `signal-amplification` Amplification in a signaling cascade; `rtk` Receptor tyrosine kinase activation
- [x] **4.4 Feedback** — `feedback-loops` Negative vs positive feedback loops; `feedback-glucose` Negative feedback: blood glucose regulation
- [x] **4.5 Cell Cycle** — `cell-cycle` The cell cycle (24-hour mammalian cell); `dna-content-mitosis` DNA content per cell through the cell cycle
- [x] **4.6 Regulation of Cell Cycle** — `cyclin-cdk` Cyclin–CDK regulation; `cell-cycle` The cell cycle (24-hour mammalian cell)
- [x] **4.7 Mitosis** — `mitosis-stages` Mitosis stages (2n = 4); `dna-content-mitosis` DNA content per cell through the cell cycle

### bio-u5
- [x] **5.1 Meiosis** — `meiosis-stages` Meiosis I and II (2n = 4 → four n = 2 cells); `dna-content-meiosis` DNA content per cell through meiosis
- [x] **5.2 Meiosis and Genetic Diversity** — `crossing-over` Crossing over and independent assortment; `meiosis-stages` Meiosis I and II (2n = 4 → four n = 2 cells)
- [x] **5.3 Mendelian Genetics** — `punnett-mono` Punnett square: monohybrid cross Aa × Aa; `punnett-di` Punnett square: dihybrid cross AaBb × AaBb; `punnett-test` Test cross: A? × aa; `chi-square` Chi-square goodness of fit
- [x] **5.4 Non-Mendelian Genetics** — `punnett-incomplete` Incomplete dominance: snapdragon RW × RW; `blood-type` Multiple alleles & codominance: ABO blood type; `punnett-xlinked` X-linked recessive cross: XᴴXʰ × XᴴY; `pedigree-ar` Pedigree: autosomal recessive; `pedigree-ad` Pedigree: autosomal dominant; `pedigree-xr` Pedigree: X-linked recessive; `linkage-map` Linked genes: recombination frequency map
- [x] **5.5 Environmental Effects on Phenotype** — `env-phenotype` Environmental effects on phenotype
- [x] **5.6 Chromosomal Inheritance** — `nondisjunction` Nondisjunction in meiosis I vs II; `karyotype` Karyotype: trisomy 21; `linkage-map` Linked genes: recombination frequency map; `pedigree-xr` Pedigree: X-linked recessive

### bio-u6
- [x] **6.1 DNA and RNA Structure** — `dna-structure` DNA double helix: antiparallel strands & base pairing
- [x] **6.2 Replication** — `replication-fork` DNA replication fork
- [x] **6.3 Transcription and RNA Processing** — `transcription-splicing` Transcription and RNA processing; `central-dogma` Central dogma: DNA → RNA → protein
- [x] **6.4 Translation** — `translation` Translation at the ribosome
- [x] **6.5 Regulation of Gene Expression** — `lac-operon` lac operon (inducible); `trp-operon` trp operon (repressible); `euk-regulation` Eukaryotic gene regulation
- [x] **6.6 Gene Expression and Cell Specialization** — `cell-specialization` Differential gene expression → cell specialization; `euk-regulation` Eukaryotic gene regulation
- [x] **6.7 Mutations** — `mutations` Mutation types and their effect on protein
- [x] **6.8 Biotechnology** — `gel-electrophoresis` Gel electrophoresis (computed migration); `pcr` PCR amplification; `biotech-plasmid` Recombinant DNA: plasmid cloning

### bio-u7
- [x] **7.1 Introduction to Natural Selection** — `sel-directional` Directional selection; `variation` Variation in populations: continuous trait distribution
- [x] **7.2 Natural Selection** — `sel-stabilizing` Stabilizing selection; `sel-directional` Directional selection; `sel-disruptive` Disruptive selection
- [x] **7.3 Artificial Selection** — `artificial-selection` Artificial selection: Brassica oleracea
- [x] **7.4 Population Genetics** — `genetic-drift` Genetic drift: small vs large populations; `bottleneck` Bottleneck effect
- [x] **7.5 Hardy-Weinberg Equilibrium** — `hw-curves` Hardy–Weinberg genotype frequencies vs allele frequency; `hw-data` Hardy–Weinberg test on population data
- [x] **7.6 Evidence of Evolution** — `homologous-structures` Evidence of evolution: homologous structures; `molecular-tree` Molecular evidence: cytochrome c differences
- [x] **7.7 Common Ancestry** — `molecular-tree` Molecular evidence: cytochrome c differences; `phylo-tree` Phylogenetic tree (cladogram) with shared derived characters
- [x] **7.8 Continuing Evolution** — `antibiotic-resistance` Continuing evolution: antibiotic resistance
- [x] **7.9 Phylogeny** — `phylo-tree` Phylogenetic tree (cladogram) with shared derived characters; `character-matrix` Building a tree from a character table
- [x] **7.10 Speciation** — `speciation` Speciation: allopatric vs sympatric; gradualism vs punctuated equilibrium
- [x] **7.11 Extinction** — `extinction` Extinction through time: the "Big Five"
- [x] **7.12 Variations in Populations** — `variation` Variation in populations: continuous trait distribution; `genetic-drift` Genetic drift: small vs large populations
- [x] **7.13 Origins of Life on Earth** — `origins-life` Origins of life: timeline

### bio-u8
- [x] **8.1 Responses to the Environment** — `behavior-taxis` Responses to the environment: taxis vs kinesis; `photoperiod` Plant responses: photoperiodism
- [x] **8.2 Energy Flow Through Ecosystems** — `energy-pyramid` Energy pyramid (≈10% transfer); `food-web` Food web; `trophic-biomass` Biomass and numbers pyramids
- [x] **8.3 Population Ecology** — `pop-growth` Population growth: exponential vs logistic; `survivorship` Survivorship curves
- [x] **8.4 Effect of Density on Populations** — `density-dependence` Density-dependent vs density-independent factors; `pop-oscillation` Logistic growth with overshoot (time lag)
- [x] **8.5 Community Ecology** — `predator-prey` Predator–prey cycles (Lotka–Volterra); `competition` Interspecific competition & competitive exclusion; `food-web` Food web
- [x] **8.6 Biodiversity** — `diversity-index` Biodiversity: Simpson's diversity index; `species-area` Species–area relationship
- [x] **8.7 Disruptions to Ecosystems** — `disruption` Ecosystem disruption: invasive species; `succession` Ecological succession

## math

### math-prep-alg1
- [x] **P1.1 Expressions and Properties of Real Numbers** — `numline` Real number line
- [x] **P1.2 Linear Equations** — `lin-eq` Solving a linear equation graphically
- [x] **P1.3 Linear Inequalities** — `ineq-1d` Compound inequality on a number line; `ineq-2d` Linear inequality in two variables
- [x] **P1.4 Intro Functions and Graphs** — `vlt` Function vs not a function (vertical line test); `fn-graphs` Reading a function graph: domain, range, zeros, extrema
- [x] **P1.5 Slope and Equations of Lines** — `slope` Slope as rise over run; `slope-forms` Positive, negative, zero, undefined slope
- [x] **P1.6 Systems of Linear Equations** — `sys-one` System of linear equations: one solution; `sys-none` System of linear equations: no solution; `sys-inf` System of linear equations: infinitely many solutions
- [x] **P1.7 Exponent Rules** — `exp-rules` Exponential functions 2ˣ and (1/2)ˣ
- [x] **P1.8 Polynomial Operations** — `area-model` Polynomial multiplication area model
- [x] **P1.9 Factoring** — `factor-roots` Factoring ↔ x-intercepts
- [x] **P1.10 Intro Quadratic Equations** — `quadratic` Quadratic: vertex, axis, roots; `discriminant` Discriminant: 2, 1, or 0 real roots
- [x] **P1.11 Intro Exponential Growth** — `lin-vs-exp` Linear vs exponential growth
- [x] **P1.12 Data and Linear Models** — `scatter-fit` Scatter plot with least-squares line

### math-prep-geo
- [x] **P2.1 Points, Lines, Planes, Angles** — `angles` Angle pairs at intersecting lines
- [x] **P2.2 Parallel Lines and Triangle Congruence** — `parallel-transversal` Parallel lines cut by a transversal
- [x] **P2.3 Similar Triangles** — `similar-tri` Similar triangles (scale factor 1.5)
- [x] **P2.4 Right Triangles and Pythagorean Theorem** — `pythagoras` Pythagorean theorem (3-4-5)
- [x] **P2.5 Intro Trigonometric Ratios** — `trig-ratios` Right-triangle trig ratios (SOH-CAH-TOA)
- [x] **P2.6 Properties of Circles** — `circle-angles` Central and inscribed angles
- [x] **P2.7 Area and Perimeter** — `area-perim` Area and perimeter of a composite figure
- [x] **P2.8 Surface Area and Volume** — `solids` Volumes of solids (Archimedes)
- [x] **P2.9 Coordinate Geometry** — `dist-mid` Distance and midpoint
- [x] **P2.10 Transformations** — `transformations` Rigid transformations of a triangle
- [x] **P2.11 Basics of Proof** — `isosceles-proof` Proof figure: isosceles triangle

### math-prep-alg2
- [x] **P3.1 Families of Functions Review** — `parent-fns` Families of parent functions
- [x] **P3.2 Quadratic Functions in Depth** — `vertex-form` Transformations: y = a(x − h)² + k; `quadratic` Quadratic: vertex, axis, roots
- [x] **P3.3 Polynomial Functions** — `poly-mult` Polynomial: zeros, multiplicity, end behavior
- [x] **P3.4 Rational Functions** — `rational-analysis` Rational function: asymptotes, hole, intercepts; `limit-va` Infinite limits / vertical asymptote; `limit-ha` Limits at infinity / horizontal asymptote
- [x] **P3.5 Radicals and Rational Exponents** — `radical-fns` Radical functions √x and ∛x
- [x] **P3.6 Exponential Functions** — `exp-family` Exponential families and asymptotes
- [x] **P3.7 Logarithmic Functions** — `log-inverse` Logarithm as the inverse of exponential
- [x] **P3.8 Sequences and Series Intro** — `sequences` Arithmetic vs geometric sequences; `geo-series` Geometric series partial sums
- [x] **P3.9 Probability and Counting** — `binomial` Binomial probability distribution; `prob-tree` Probability tree diagram
- [x] **P3.10 Intro Matrices** — `matrix-transform` Matrix as a linear transformation
- [x] **P3.11 Intro Conic Sections** — `conics` Conic sections
- [x] **P3.12 Trig Identity Prep** — `pythag-id` sin²x + cos²x = 1

### math-prep-precalc
- [x] **P4.1 Polynomial and Rational Analysis** — `rational-analysis` Rational function: asymptotes, hole, intercepts; `poly-mult` Polynomial: zeros, multiplicity, end behavior
- [x] **P4.2 Exponential and Log Models** — `exp-log-model` Exponential decay model (half-life); `log-inverse` Logarithm as the inverse of exponential
- [x] **P4.3 Unit Circle and Trig Functions** — `unit-circle` Unit circle: special angles (exact values); `sin-cos-graph` Graphs of sin x and cos x; `tan-graph` Graph of tan x; `sinusoid` Transformed sinusoid y = A sin(B(x − C)) + D
- [x] **P4.4 Trig Equations and Identities** — `trig-eq` Solving sin x = 1/2 on [0, 2π]; `pythag-id` sin²x + cos²x = 1
- [x] **P4.5 Intro Polar Coordinates** — `polar-points` Plotting polar points & conversion; `polar-basic` Polar coordinates: cardioid r = 1 + cos θ
- [x] **P4.6 Intro Parametric Equations** — `param-intro` Parametric equations: ellipse; `cycloid` Parametric arc length: cycloid
- [x] **P4.7 Intro Vectors** — `vectors` Vector addition (tip-to-tail / parallelogram)
- [x] **P4.8 Matrices and Transformations** — `matrix-transform` Matrix as a linear transformation; `matrix-rot` Rotation matrix
- [x] **P4.9 Limit Intuition** — `limit-sinx` sin x / x near 0; `limit-table` Estimating a limit from a table
- [x] **P4.10 Rate of Change Intuition** — `rate-intuition` Rate of change intuition: shrinking intervals; `secant-tangent` Secant lines → tangent line

### calc-u0
- [x] **0.1 Functions and Graphs** — `parent-fns` Families of parent functions; `fn-graphs` Reading a function graph: domain, range, zeros, extrema
- [x] **0.2 Unit Circle and Trigonometry** — `unit-circle` Unit circle: special angles (exact values); `sin-cos-graph` Graphs of sin x and cos x; `tan-graph` Graph of tan x; `sinusoid` Transformed sinusoid y = A sin(B(x − C)) + D

### calc-u1
- [x] **1.1 Introducing Calculus: Can Change Occur at an Instant?** — `secant-tangent` Secant lines → tangent line
- [x] **1.2 Defining Limits and Using Limit Notation** — `limit-1sided` Reading one-sided limits from a graph
- [x] **1.3 Estimating Limit Values from Graphs** — `limit-jump` Jump discontinuity; `limit-hole` Removable discontinuity (hole); `limit-hole-defined` Hole with a displaced point; `limit-va` Infinite limits / vertical asymptote; `limit-osc` Oscillating behavior — limit does not exist; `limit-1sided` Reading one-sided limits from a graph
- [x] **1.4 Estimating Limit Values from Tables** — `limit-table` Estimating a limit from a table
- [x] **1.5 Determining Limits Using Algebraic Properties of Limits** — `limit-algebra` Limit properties from graphs of f and g
- [x] **1.6 Determining Limits Using Algebraic Manipulation** — `limit-hole` Removable discontinuity (hole); `limit-rationalize` Limit by rationalizing
- [x] **1.7 Selecting Procedures for Determining Limits** — `limit-rationalize` Limit by rationalizing; `limit-sinx` sin x / x near 0
- [x] **1.8 Determining Limits Using the Squeeze Theorem** — `limit-squeeze` Squeeze theorem
- [x] **1.9 Connecting Multiple Representations of Limits** — `limit-table` Estimating a limit from a table; `limit-1sided` Reading one-sided limits from a graph
- [x] **1.10 Exploring Types of Discontinuities** — `disc-types` Discontinuity types side by side; `limit-jump` Jump discontinuity; `limit-hole` Removable discontinuity (hole); `limit-va` Infinite limits / vertical asymptote
- [x] **1.11 Defining Continuity at a Point** — `cont-3cond` Continuity: three conditions
- [x] **1.12 Confirming Continuity over an Interval** — `cont-interval` Continuity on an interval
- [x] **1.13 Removing Discontinuities** — `cont-remove` Removing a discontinuity
- [x] **1.14 Connecting Infinite Limits and Vertical Asymptotes** — `limit-va` Infinite limits / vertical asymptote
- [x] **1.15 Connecting Limits at Infinity and Horizontal Asymptotes** — `limit-ha` Limits at infinity / horizontal asymptote
- [x] **1.16 Working with the Intermediate Value Theorem (IVT)** — `ivt` Intermediate Value Theorem

### calc-u2
- [x] **2.1 Defining Average and Instantaneous Rates of Change** — `avg-inst` Average vs instantaneous rate; `secant-tangent` Secant lines → tangent line
- [x] **2.2 Defining the Derivative of a Function and Using Derivative Notation** — `diff-quotient` Difference quotient
- [x] **2.3 Estimating Derivatives of a Function at a Point** — `deriv-table` Estimating f′ from a table
- [x] **2.4 Connecting Differentiability and Continuity** — `nondiff` Where f is not differentiable
- [x] **2.5 Applying the Power Rule** — `power-rule` Power rule: f = x³, f′ = 3x²
- [x] **2.6 Derivative Rules: Constant, Sum, Difference, and Constant Multiple** — `sum-rule` Sum and constant-multiple rules
- [x] **2.7 Derivatives of cos x, sin x, eˣ, and ln x** — `trig-deriv` Derivatives of sin x and cos x; `exp-ln-deriv` eˣ, ln x and their derivatives
- [x] **2.8 The Product Rule** — `product-rule` Product rule area model
- [x] **2.9 The Quotient Rule** — `quotient-rule` Quotient rule example
- [x] **2.10 Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions** — `tan-sec` tan x and its derivative sec²x

### calc-u3
- [x] **3.1 The Chain Rule** — `chain-rule` Chain rule: sin(x²)
- [x] **3.2 Implicit Differentiation** — `implicit-circle` Implicit differentiation: circle; `implicit-folium` Folium of Descartes x³ + y³ = 6xy
- [x] **3.3 Differentiating Inverse Functions** — `inverse-deriv` Derivative of an inverse function
- [x] **3.4 Differentiating Inverse Trigonometric Functions** — `inverse-trig` Inverse trig functions
- [x] **3.5 Selecting Procedures for Calculating Derivatives** — `chain-rule` Chain rule: sin(x²); `quotient-rule` Quotient rule example
- [x] **3.6 Calculating Higher-Order Derivatives** — `higher-deriv` Higher-order derivatives of eˣ sin x; `fff` f, f′, f″ for f = x³ − 3x

### calc-u4
- [x] **4.1 Interpreting the Meaning of the Derivative in Context** — `context-rate` Derivative in context (units)
- [x] **4.2 Straight-Line Motion: Connecting Position, Velocity, and Acceleration** — `motion-svt` Position, velocity, acceleration (stacked)
- [x] **4.3 Rates of Change in Applied Contexts Other Than Motion** — `marginal` Rates in applied contexts: marginal cost
- [x] **4.4 Introduction to Related Rates** — `ladder` Related rates: sliding ladder
- [x] **4.5 Solving Related Rates Problems** — `ladder` Related rates: sliding ladder; `cone-tank` Related rates: conical tank
- [x] **4.6 Approximating Values of a Function Using Local Linearity and Linearization** — `linearization` Local linearity / tangent-line approximation
- [x] **4.7 L'Hospital's Rule for Determining Limits of Indeterminate Forms** — `lhopital` L'Hospital's rule (0/0); `lhopital-inf` L'Hospital (∞/∞): polynomial vs exponential

### calc-u5
- [x] **5.1 Using the Mean Value Theorem** — `mvt` Mean Value Theorem
- [x] **5.2 Extreme Value Theorem, Global Versus Local Extrema, and Critical Points** — `evt` Extreme Value Theorem: absolute vs local extrema
- [x] **5.3 Determining Intervals of Increase and Decrease** — `inc-dec` Increasing / decreasing from the sign of f′
- [x] **5.4 Using the First Derivative Test to Determine Relative Local Extrema** — `fdt-chart` First derivative test sign chart; `inc-dec` Increasing / decreasing from the sign of f′
- [x] **5.5 Using the Candidates Test to Determine Absolute Extrema** — `candidates` Candidates (closed interval) test
- [x] **5.6 Determining Concavity of Functions over Their Domains** — `concavity` Concavity and inflection
- [x] **5.7 Using the Second Derivative Test to Determine Extrema** — `sdt` Second derivative test
- [x] **5.8 Sketching Graphs of Functions and Their Derivatives** — `f-from-fprime` Reading f from the graph of f′; `fff` f, f′, f″ for f = x³ − 3x
- [x] **5.9 Connecting a Function, Its First Derivative, and Its Second Derivative** — `fff-panels` Stacked f / f′ / f″ panels; `fff` f, f′, f″ for f = x³ − 3x; `f-from-fprime` Reading f from the graph of f′
- [x] **5.10 Introduction to Optimization Problems** — `optimization-diagram` Optimization setup: box net; `optimization` Optimization: open-top box volume
- [x] **5.11 Solving Optimization Problems** — `optimization` Optimization: open-top box volume
- [x] **5.12 Exploring Behaviors of Implicit Relations** — `implicit-behavior` Horizontal & vertical tangents of x² + xy + y² = 3

### calc-u6
- [x] **6.1 Exploring Accumulations of Change** — `accum-velocity` Accumulation of change: area under v(t)
- [x] **6.2 Approximating Areas with Riemann Sums** — `riemann-left` Left Riemann sum, n = 4; `riemann-right` Right Riemann sum, n = 4; `riemann-mid` Midpoint Riemann sum, n = 4; `riemann-trap` Trapezoidal Riemann sum, n = 4; `riemann-table` Riemann / trapezoidal sum from a table (unequal Δt)
- [x] **6.3 Riemann Sums, Summation Notation, and Definite Integral Notation** — `riemann-converge` Riemann sums converge as n → ∞
- [x] **6.4 The Fundamental Theorem of Calculus and Accumulation Functions** — `ftc-accum` Accumulation function g(x) = ∫₀ˣ f(t) dt
- [x] **6.5 Interpreting the Behavior of Accumulation Functions Involving Graphs** — `accum-graph` Behavior of g(x) = ∫₋₂ˣ f(t) dt from a graph of f
- [x] **6.6 Applying Properties of Definite Integrals** — `integral-props` Properties of definite integrals
- [x] **6.7 The Fundamental Theorem of Calculus and Definite Integrals** — `ftc-area` FTC part 2: area under x² on [1, 3]
- [x] **6.8 Finding Antiderivatives and Indefinite Integrals: Basic Rules and Notation** — `antideriv-family` Family of antiderivatives F(x) + C
- [x] **6.9 Integrating Using Substitution** — `u-sub` Integration by substitution
- [x] **6.10 Integrating Using Integration by Parts** — `ibp` Integration by parts
- [x] **6.11 Integrating Using Linear Partial Fractions** — `partial-frac` Partial fractions
- [x] **6.12 Evaluating Improper Integrals** — `improper` Improper integrals: 1/x² converges, 1/x diverges
- [x] **6.13 Integrating Using Linear Partial Fractions and Other Techniques** — `arctan-int` Other techniques: ∫ 1/(1+x²) dx = arctan x; `partial-frac` Partial fractions
- [x] **6.14 Selecting Techniques for Antidifferentiation** — `u-sub` Integration by substitution; `ibp` Integration by parts; `partial-frac` Partial fractions

### calc-u7
- [x] **7.1 Modeling Situations with Differential Equations** — `exp-model` Exponential models dy/dt = ky; `logistic` Logistic growth dP/dt = kP(1 − P/M)
- [x] **7.2 Verifying Solutions for Differential Equations** — `de-verify` Verifying solutions: y = Ce²ˣ solves y′ = 2y
- [x] **7.3 Sketching Slope Fields** — `sf-xy` Slope field: dy/dx = x − y; `sf-xy2` Slope field: dy/dx = xy; `sf-logistic` Slope field: dy/dx = y(4 − y)/4; `sf-x-over-y` Slope field: dy/dx = −x/y
- [x] **7.4 Reasoning Using Slope Fields** — `sf-xy` Slope field: dy/dx = x − y; `sf-logistic` Slope field: dy/dx = y(4 − y)/4
- [x] **7.5 Approximating Solutions Using Euler's Method** — `euler` Euler's method vs exact solution; `euler-steps` Euler's method: two steps on a slope field
- [x] **7.6 Finding General Solutions Using Separation of Variables** — `separable` Separation of variables: dy/dx = xy
- [x] **7.7 Finding Particular Solutions Using Initial Conditions and Separation of Variables** — `separable` Separation of variables: dy/dx = xy; `sf-x-over-y` Slope field: dy/dx = −x/y
- [x] **7.8 Exponential Models with Differential Equations** — `exp-model` Exponential models dy/dt = ky
- [x] **7.9 Logistic Models with Differential Equations** — `logistic` Logistic growth dP/dt = kP(1 − P/M); `sf-logistic` Slope field: dy/dx = y(4 − y)/4

### calc-u8
- [x] **8.1 Finding the Average Value of a Function on an Interval** — `avg-value` Average value of a function
- [x] **8.2 Connecting Position, Velocity, and Acceleration Using Integrals** — `disp-dist` Displacement vs total distance
- [x] **8.3 Using Accumulation Functions and Definite Integrals in Applied Contexts** — `rate-in-out` Rate in / rate out accumulation
- [x] **8.4 Finding the Area Between Curves Expressed as Functions of x** — `area-x` Area between curves (dx)
- [x] **8.5 Finding the Area Between Curves Expressed as Functions of y** — `area-y` Area between curves (dy)
- [x] **8.6 Finding Area Between Curves That Intersect at More Than Two Points** — `area-multi` Area with multiple intersections
- [x] **8.7 Volumes with Cross Sections: Squares and Rectangles** — `xsec-square` Cross sections: squares
- [x] **8.8 Volumes with Cross Sections: Triangles and Semicircles** — `xsec-tri` Cross sections: equilateral triangles; `xsec-semi` Cross sections: semicircles
- [x] **8.9 Volume with Disc Method: Revolving Around the x- or y-Axis** — `disc-x` Disc method about the x-axis
- [x] **8.10 Volume with Disc Method: Revolving Around Other Axes** — `disc-other` Disc method about y = −1
- [x] **8.11 Volume with Washer Method: Revolving Around the x- or y-Axis** — `washer-x` Washer method about the x-axis
- [x] **8.12 Volume with Washer Method: Revolving Around Other Axes** — `washer-other` Washer method about y = 2
- [x] **8.13 The Arc Length of a Smooth, Planar Curve and Distance Traveled** — `arc-length` Arc length of y = x^(3/2)

### calc-u9
- [x] **9.1 Defining and Differentiating Parametric Equations** — `param-curve` Parametric curve with direction and tangents
- [x] **9.2 Second Derivatives of Parametric Equations** — `param-concavity` Second derivative of a parametric curve
- [x] **9.3 Finding Arc Lengths of Curves Given by Parametric Equations** — `cycloid` Parametric arc length: cycloid
- [x] **9.4 Defining and Differentiating Vector-Valued Functions** — `vector-motion` Vector-valued motion: position, velocity, acceleration
- [x] **9.5 Integrating Vector-Valued Functions** — `vector-integral` Integrating velocity to get position
- [x] **9.6 Solving Motion Problems Using Parametric and Vector-Valued Functions** — `vector-motion` Vector-valued motion: position, velocity, acceleration; `param-curve` Parametric curve with direction and tangents
- [x] **9.7 Defining Polar Coordinates and Differentiating in Polar Form** — `polar-basic` Polar coordinates: cardioid r = 1 + cos θ; `polar-limacon` Limaçon with inner loop r = 1 + 2cos θ
- [x] **9.8 Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve** — `polar-area` Polar area: one petal of r = sin 2θ
- [x] **9.9 Finding the Area of the Region Bounded by Two Polar Curves** — `polar-two` Area between two polar curves

### calc-u10
- [x] **10.1 Defining Convergent and Divergent Infinite Series** — `conv-div` Convergent vs divergent series; `geo-series` Geometric series partial sums
- [x] **10.2 Working with Geometric Series** — `geo-series` Geometric series partial sums
- [x] **10.3 The nth Term Test for Divergence** — `nth-term` nth-term test for divergence
- [x] **10.4 Integral Test for Convergence** — `integral-test` Integral test
- [x] **10.5 Harmonic Series and p-Series** — `p-series` p-series partial sums; `conv-div` Convergent vs divergent series
- [x] **10.6 Comparison Tests for Convergence** — `comparison` Direct comparison test
- [x] **10.7 Alternating Series Test for Convergence** — `alt-series` Alternating series test & error bound
- [x] **10.8 Ratio Test for Convergence** — `ratio-test` Ratio test
- [x] **10.9 Determining Absolute or Conditional Convergence** — `abs-cond` Absolute vs conditional convergence
- [x] **10.10 Alternating Series Error Bound** — `alt-series` Alternating series test & error bound
- [x] **10.11 Finding Taylor Polynomial Approximations of Functions** — `taylor-sin` Taylor polynomials of sin x at 0; `taylor-exp` Taylor polynomials of eˣ at 0
- [x] **10.12 Lagrange Error Bound** — `lagrange` Lagrange error bound
- [x] **10.13 Radius and Interval of Convergence of Power Series** — `interval-conv` Radius and interval of convergence
- [x] **10.14 Finding Taylor or Maclaurin Series for a Function** — `maclaurin-cos` Maclaurin series for cos x; `taylor-sin` Taylor polynomials of sin x at 0
- [x] **10.15 Representing Functions as Power Series** — `power-geo` Power series from 1/(1 − x)
